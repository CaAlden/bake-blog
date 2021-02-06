import * as React from 'react';
import { css } from '@emotion/css';
import PageLayout from './layout/PageLayout';
import { NamedLink, PostDataHeader } from '../types';
import { Breakpoint, useBreakpoint } from './context';
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
  background: 'linear-gradient(180deg, rgba(255,255,255, 0) 0%, rgba(255, 255, 255,0) 85%, rgba(255, 255, 255, 1) 100%)',
  zIndex: 1,
});
const titleContainerClass = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const titleClassName = css({
  fontSize: '5em',
  fontStyle: 'italic',
  zIndex: 2,
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
      <h1 className={titleClassName}>Bake Blog</h1>
    </section>
  );
};

interface IProps {
  posts: PostDataHeader[];
}

const getPosts = (posts: PostDataHeader[]): CardPost[] => {
  const result: CardPost[] = [];
  posts.forEach(p => {
    result.push({
      type: 'post',
      props: { ...p, postLink: p.articleLink },
    });
    p.recipeLinks.forEach(r => {
      result.push({ type: 'recipe', props: { ...p, recipeLink: r} });
    })
  });
  return result;
};

const getCardListClass = (breakpoint: Breakpoint) => css({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '30px',
  padding: breakpoint === Breakpoint.Small ? '30px 5px' : Breakpoint.Medium ? '30px 10%' : '30px 25%',
});

const PostCards: React.FC<IProps> = ({ posts }) => {
  const breakpoint = useBreakpoint();
  const taggedPostData = React.useMemo(() => getPosts(posts), [posts]);
  return (
    <section className={getCardListClass(breakpoint)}>
      {taggedPostData.map(post =>
        post.type === 'post' ? <PostCard key={post.props.postLink.name} {...post.props} /> : <RecipeCard key={post.props.recipeLink.name} {...post.props} />
      )}
    </section>
  );
};

const pageLayoutClass = css({
  display: 'grid',
  gridTemplateRows: '50vh',
  gridAutoRows: '1fr',
  gridTemplateColumns: '1fr',
});

const Homepage: React.FC<IProps> = ({
  children,
  posts,
}) => {
  return (
    <PageLayout title="Bake Blog">
      <main className={pageLayoutClass}>
        <HeroTitle />
        <PostCards posts={posts} />
      </main>
    </PageLayout>
  );
}

export default Homepage;
