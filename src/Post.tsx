import * as React from 'react';
import { Link } from 'react-router-dom';
import { PostData } from '../types';
import Markdown from './utils/Markdown';
import { useUnits } from './context';
import PageLayout from './layout/PageLayout';
import HeroImage from './layout/HeroImage';
import { css } from '@emotion/css';
interface IProps {
  data: PostData;
}

const postLayoutClass = css({
  display: 'grid',
  gridTemplateRows: 'minmax(400px, 60vh) 30px',
  gap: '10px',
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
  color: 'gray',
});

const articleClass = css({
  padding: '0 25%',
  disply: 'flex',
});
const dateClass = css({
  fontWeight: "lighter",
});
export default function Post({ data }: IProps) {
  const [unit] = useUnits();
  return (
    <PageLayout title={data.title}>
      <article className={postLayoutClass}>
        <HeroImage text={data.title} image={data.articleLink.image} />
        <div className={frontMatterClass}>
          <span>{data.author ?? 'Campbell Alden'}</span>
          <span className={dateClass}>{data.publishDate.toLocaleString()}</span>
        </div>
        <section className={articleClass}>
          <Markdown markdown={data.blog[unit]} />
        </section>
      </article>
    </PageLayout>
  );
}
