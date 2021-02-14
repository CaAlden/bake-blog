import * as React from 'react';
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import { css } from '@emotion/css';
import { Colors } from './Colors';
import { parseUrl } from 'query-string';
import { Link } from 'react-router-dom';
import { useSelectedIngredient } from '../context';
import { isIngredientMatch } from './ingredients';

interface IProps {
  markdown: string;
}

const recipeOlClass = css({
  clear: 'both',
  listStyle: 'none',
  paddingLeft: '2%',
  ' > li': {
    margin: '2em 0',
    paddingTop: '2em',
    display: 'block',
    position: 'relative',
    counterIncrement: 'inst',
  },
  ' > li::before': {
    content: 'counter(inst)',

    background: Colors.Third,
    color: '#fff',

    fontWeight: 700,
    fontStyle: 'italic',
    textShadow: `1px 1px ${Colors.Third}`,

    borderRadius: '0 0.675em 0.675em 0',
    paddingLeft: '0.25em',
    fontFamily: 'Playfair Display, serif',
    fontSize: '2em',
    textAlign: 'center',

    left: '-5%',
    top: '-0.65em',
    height: '1.35em',
    width: '1.35em',
    position: 'absolute',
    transition: 'all 0.2s ease-in-out',
  },
});
const RecipeOL: React.FC = ({ children }) => (
  <ol className={recipeOlClass}>
    {children}
  </ol>
);

const recipeStrongClass = css({
  color: Colors.Secondary,
});

const BasicStrong: React.FC = ({ children }) => {
  return (
    <strong className={recipeStrongClass}>
      {children}
    </strong>
  );
}

const RecipeStrong: React.FC = ({ children }) => {
  const { ingredient, setIngredient } = useSelectedIngredient();
  const isPossibleChildren = Array.isArray(children) && children.length === 1 && typeof children[0] === 'string';
  const isMatch = isPossibleChildren && ingredient !== null && isIngredientMatch(children[0], ingredient);
  return (
    <strong
      className={recipeStrongClass}
      style={isMatch ? { color: ingredient?.color ?? undefined, cursor: 'pointer' } : {}}
      onMouseEnter={() => isPossibleChildren && setIngredient(children[0])}
      onMouseOut={() => {
        if (isPossibleChildren) {
          setIngredient((i) => i && isIngredientMatch(children[0], i) ? null : i?.name);
        }
      }}
    >
      {children}
    </strong>
  );
};

const linkClassName = css({
  color: Colors.Third,
  ':active': {
    color: 'red',
  },
});
const CustomLink: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({
  href,
  children,
  ...rest
}) => {
  const parsed = React.useMemo(() => parseUrl(href), [href]);
  const isOnsite = parsed.url.startsWith('/');

  return isOnsite ? (
    <Link to={href} className={linkClassName}>{children}</Link>
  ) : (
    <a href={href} className={linkClassName} {...rest}>{children}</a>
  );
};

const recipeHeaderClass = css({
  color: Colors.Third,
  fontSize: '2em',
});
const RecipeHeader: React.FC = ({ children }) => (
  <h1 className={recipeHeaderClass}>{children}</h1>
);

const makeMarkdownParser = (remarkReactComponents: Record<string, React.ComponentType<any>>) =>
  (props: IProps): React.ReactElement => {
    const { ingredient } = useSelectedIngredient();
    return (
      unified()
      .use(parse)
      .use(remark2react, { remarkReactComponents })
      .processSync(props.markdown).result
    ) as React.ReactElement;
  };


const shared: Record<string, React.ComponentType<any>> = {
  a: CustomLink,
};
const RegularMarkdown = makeMarkdownParser({
  ...shared,
  b: BasicStrong,
  strong: BasicStrong,
});

export const RecipeMarkdown = makeMarkdownParser({
  ...shared,
  strong: RecipeStrong,
  b: RecipeStrong,
  ol: RecipeOL,
  h1: RecipeHeader,
});

export default RegularMarkdown;
