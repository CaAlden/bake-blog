import * as React from 'react';
import { css } from '@emotion/css';
import PageLayout from './layout/PageLayout';
import { NamedLink, PostData } from '../types';
import { getRecipes } from './utils/posts';
import { RecipeCard, PostCard, CardPost } from './layout/Cards';

const graphBackgroundClass = css({
  width: '100%',
  height: '100%',
  position: 'absolute',
  isolation: 'isolate',
});
const overlayClass = css({
  width: '100%',
  height: '100%',
  position: 'absolute',
  background: 'linear-gradient(180deg, rgba(252,248,248, 0) 0%, rgba(252, 248, 248,0) 85%, rgba(252, 248, 248, 1) 100%)',
  zIndex: 1,
});
const titleContainerClass = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
  paddingBottom: '15px',
});
const titleClassName = css({
  textAlign: 'center',
  fontSize: '5em',
  zIndex: 2,
  color: '#fff',
  background: '#000',
  padding: '20px',
});
const HeroTitle: React.FC = () => {
  return (
    <section className={titleContainerClass}>
      <div className={graphBackgroundClass}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(0,0,0, 0.4)" strokeWidth="1"/>
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className={overlayClass} />
      <h1 className={titleClassName}>The Bake Lab</h1>
    </section>
  );
};

interface IProps {
  posts: PostData[];
}

const getPosts = (posts: PostData[]): CardPost[] => {
  const result: CardPost[] = [];
  posts.forEach(p => {
    result.push({
      type: 'post',
      props: { ...p, postLink: p.articleLink },
    });
    const recipes = getRecipes(p).forEach((r) => {
      result.push({
        type: 'recipe',
        props: {
          recipeLink: r.link,
          ...r,
        },
      });
    });
  });
  return result;
};

const cardListClass = css({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const PostCards: React.FC<IProps> = ({ posts }) => {
  const taggedPostData = React.useMemo(() => getPosts(posts), [posts]);
  return (
    <section className={cardListClass}>
      {taggedPostData.map(post =>
        post.type === 'post' ? (
          <div key={post.props.postLink.name} style={{ padding: '15px'}}>
            <PostCard  {...post.props} />
          </div>
        ) : (
          <div key={post.props.recipeLink.name} style={{ padding: '15px'}}>
            <RecipeCard {...post.props} />
          </div>
        )
      )}
    </section>
  );
};

const Homepage: React.FC<IProps> = ({
  children,
  posts,
}) => {
  return (
    <PageLayout
      title="The Bake Lab"
      hero={<HeroTitle />}
    >
      <PostCards posts={posts} />
    </PageLayout>
  );
}

export default Homepage;
