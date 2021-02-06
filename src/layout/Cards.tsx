import * as React from 'react';
import { css } from '@emotion/css';
import { Colors } from '../utils/Colors';
import { Difficulty, Image, NamedLink, PostDataHeader } from '../../types';
import { Link } from 'react-router-dom';

type SharedProps = Pick<PostDataHeader, 'description' | 'publishDate'>;

interface IRecipeCardProps extends SharedProps {
  recipeLink: NamedLink;
  difficulty: Difficulty;
}

interface IPostCardProps extends SharedProps {
  postLink: NamedLink;
  timeEstimate: number;
}

interface IPostCardPost {
  type: 'post';
  props: IPostCardProps;
}
interface IRecipeCardPost {
  type: 'recipe';
  props: IRecipeCardProps;
}

export type CardPost = IPostCardPost | IRecipeCardPost;

const imageClass = css({
  background: 'white',
  position: 'absolute',
  right: 'calc(50% - 120px)',
  top: '-50px',
  height: '225px',
  width: '225px',
  borderRadius: '50%',
  padding: '5px',
  border: '4px solid black',
});
const cardTopContainerClass = css({
  position: 'relative',
});
const CardTop: React.FC<{ image: Image }> = ({ image }) => {
  return (
    <div className={cardTopContainerClass}>
      <img src={image.small ?? image.base} className={imageClass} />
    </div>
  );
};

const cardContainerClass = css({
  marginTop: '50px',
  width: '300px',
  height: '375px',
  border: '1px solid black',
  display: 'grid',
  gridTemplateRows: '60% 40%',
  gridTemplateColumns: '1fr',
  boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)',
});
const cardContentSectionClass = css({
  borderTop: '1px solid black',
  padding: '5px',
});
const CardLayout: React.FC<{
  color: string;
  top: React.ReactNode;
  content: React.ReactNode;
}> = ({
  color,
  top,
  content,
}) => {
  return (
    <div className={cardContainerClass}>
      <div style={{ background: color }}>
        {top}
      </div>
      <div className={cardContentSectionClass}>
        {content}
      </div>
    </div>
  );
};

const RecipeContent: React.FC<IRecipeCardProps> = ({
  description,
  recipeLink,
  difficulty,
  publishDate,
}) => {
  return (
    <div>
      <div>
        <Link to={recipeLink.url}>
          <h3>{recipeLink.name}</h3>
        </Link>
        <span>{publishDate.toLocaleDateString()}</span>
      </div>
      <p>{description}</p>
      <div>
        <label>Difficulty: </label>
        <span>{difficulty}</span>
      </div>
    </div>
  );
};

export const RecipeCard: React.FC<IRecipeCardProps> = (props) => (
  <CardLayout
    color={Colors.Secondary}
    top={<CardTop image={props.recipeLink.image} />}
    content={<RecipeContent {...props} />}
  />
);

const PostContent: React.FC<IPostCardProps> = ({
  description,
  postLink,
  timeEstimate,
  publishDate,
}) => {
  return (
    <div>
      <div>
        <Link to={postLink.url}>
          <h3>{postLink.name}</h3>
        </Link>
        <span>{publishDate.toLocaleDateString()}</span>
      </div>
      <p>{description}</p>
      <div>
        <label>Reading Time: </label>
        <span>{timeEstimate} Minutes</span>
      </div>
    </div>
  );
};

export const PostCard: React.FC<IPostCardProps> = (props) => (
  <CardLayout
    color={Colors.Third}
    top={<CardTop image={props.postLink.image} />}
    content={<PostContent {...props} />}
  />
);
