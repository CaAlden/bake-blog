import * as React from 'react';
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import { css } from '@emotion/css';
import { Colors } from './Colors';
import { parseUrl } from 'query-string';
import { Link } from 'react-router-dom';

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
const CustomStrong: React.FC = ({ children }) => (
  <strong className={recipeStrongClass}>{children}</strong>
);

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
    return (
      unified()
      .use(parse)
      .use(remark2react, { remarkReactComponents })
      .processSync(props.markdown).result
    ) as React.ReactElement;
  };


const shared: Record<string, React.ComponentType<any>> = {
  strong: CustomStrong,
  b: CustomStrong,
  a: CustomLink,
};
const RegularMarkdown = makeMarkdownParser(shared);

export const RecipeMarkdown = makeMarkdownParser({
  ...shared,
  ol: RecipeOL,
  h1: RecipeHeader,
});

export default RegularMarkdown;
