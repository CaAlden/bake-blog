import * as React from 'react';
import { Link } from 'react-router-dom';
import { IAuthor, ISocialLink, PostData } from '../types';
import Markdown from './utils/Markdown';
import { useUnits } from './context';
import PageLayout from './layout/PageLayout';
import HeroImage from './layout/HeroImage';
import { css } from '@emotion/css';

const SocialLink: React.FC<{ link: ISocialLink }> = ({ link }) => {
  return (
    <a href={link.url}>{link.site}</a>
  );
};

const avatarContainerClass = css({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
});
const imageClass = css({
  height: '75px',
  width: '75px',
  borderRadius: '75px',
});
const infoAsideClass = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});
const nameClass = css({
  display: 'inline-flex',
  flexGrow: 1,
});
const socialLinksContainer = css({
  display: 'inline-flex',
  alignItems: 'center',
  flexGrow: 1,
  gap: '10px',
});
const AuthorAvatar: React.FC<IAuthor> = ({
  name,
  socialLinks,
  image,
}) => {
  return (
    <div className={avatarContainerClass}>
      <img className={imageClass} src={image.small ?? image.medium ?? image.large} />
      <div className={infoAsideClass}>
        <span className={nameClass}>{name}</span>
        {socialLinks.length > 0 &&
          <div className={socialLinksContainer}>{
            socialLinks.map(sl => <SocialLink key={sl.site} link={sl} />)
          }</div>
        }
      </div>
    </div>
  );
};

interface IProps {
  data: PostData;
}

const postLayoutClass = css({
  display: 'grid',
  gridTemplateRows: '100px',
  paddingTop: '10px',
  gridAutoRows: '1fr',
  flexGrow: 1,
});
const frontMatterClass = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '10px',
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
});
export default function Post({ data }: IProps) {
  const [unit] = useUnits();
  return (
    <PageLayout
      title={data.title}
      hero={<HeroImage text={data.title} image={data.articleLink.image} />}
    >
      <article className={postLayoutClass}>
        <div className={frontMatterClass}>
          {data.author && <AuthorAvatar {...data.author} />}
          <span className={dateClass}>{data.publishDate.toLocaleString()}</span>
        </div>
        <section className={articleClass}>
          <Markdown markdown={data.blog[unit]} />
        </section>
      </article>
    </PageLayout>
  );
}
