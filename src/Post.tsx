import * as React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { IAuthor, ISocialLink, PostData } from '../types';
import Markdown from './utils/Markdown';
import { Breakpoint, useBreakpoint, useUnits } from './context';
import PageLayout from './layout/PageLayout';
import HeroImage from './layout/HeroImage';
import { css } from '@emotion/css';
import { getFullHref } from './utils/header';

const SocialLink: React.FC<{ link: ISocialLink }> = ({ link }) => {
  return (
    <a href={link.url}>{link.site}</a>
  );
};

const getAvatarContainerClass = (breakpoint: Breakpoint) => css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: breakpoint === Breakpoint.Small ? 'center' : 'flex-start',
  flexGrow: 1,
});
const imageClass = css({
  height: '75px',
  width: '75px',
  borderRadius: '75px',
  marginRight: '10px',
});
const infoAsideClass = css({
  display: 'flex',
  flexDirection: 'column',
});
const nameClass = css({
  display: 'inline-flex',
  flexGrow: 1,
  paddingBottom: '10px',
});
const socialLinksContainer = css({
  display: 'inline-flex',
  alignItems: 'center',
  flexGrow: 1,
});
const AuthorAvatar: React.FC<IAuthor> = ({
  name,
  socialLinks,
  image,
}) => {
  const breakpoint = useBreakpoint();
  return (
    <div className={getAvatarContainerClass(breakpoint)}>
      <img className={imageClass} src={image.small ?? image.medium ?? image.large} />
      <div className={infoAsideClass}>
        <span className={nameClass}>{name}</span>
        {socialLinks.length > 0 &&
          <div className={socialLinksContainer}>{
          socialLinks.map(
            sl => <div key={sl.site} style={{ paddingRight: '10px' }}><SocialLink key={sl.site} link={sl} /></div>)
          }</div>
        }
      </div>
    </div>
  );
};

interface IProps {
  data: PostData;
}

const getPostLayoutClass = (breakpoint: Breakpoint) => css({
  display: 'grid',
  justifyContent: 'center',
  gridTemplateRows: breakpoint === Breakpoint.Small ? '180px' : '100px',
  paddingLeft: breakpoint === Breakpoint.Large ? '10%' : '0',
  paddingRight: breakpoint === Breakpoint.Large ? '10%' : '0',
  paddingTop: '10px',
  gridAutoRows: '1fr',
  flexGrow: 1,
});
const frontMatterClass = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  padding: '0 10px',
});

const articleClass = css({
  display: 'flex',
  flexDirection: 'column',
  background: '#fff',
  padding: '30px',
});
const dateClass = css({
  fontWeight: "lighter",
  paddingBottom: '10px',
});
const getPostInfoAside = (breakpoint: Breakpoint) => css({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  alignItems: breakpoint === Breakpoint.Small ? 'center' : 'flex-end',
});

const timeEstimateClass = css({
  fontSize: '0.8em',
});
const TimeEstimate: React.FC<{ timeEstimate: number }> = ({ timeEstimate }) => {
  const timeJars = Array(Math.min(5, Math.round(timeEstimate / 3))).fill('⏳');
  const calculatedMessage = `${timeJars.join('')} (~${timeEstimate} minutes)`;
  return (
    <span className={timeEstimateClass}>{calculatedMessage}</span>
  );
};

export default function Post({ data }: IProps) {
  const [unit] = useUnits();
  const breakpoint = useBreakpoint();
  return (
    <PageLayout
      title={data.title}
      hero={<HeroImage text={data.title} image={data.image} />}
      meta={{
        type: 'article',
        creator: data.author?.twitterHandle,
        description: data.description,
        image: getFullHref(data.articleLink.image.large),
        card: 'summary_large_image',
      }}
    >
      <article className={getPostLayoutClass(breakpoint)}>
        <div className={frontMatterClass}>
          {data.author && <AuthorAvatar {...data.author} />}
          <div className={getPostInfoAside(breakpoint)}>
            <span className={dateClass}>{data.publishDate.toLocaleString()}</span>
            <TimeEstimate timeEstimate={data.timeEstimate} />
          </div>
        </div>
        <section className={articleClass}>
          <Markdown markdown={data.blog[unit]} />
        </section>
      </article>
    </PageLayout>
  );
}
