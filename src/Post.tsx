import * as React from 'react';
import { Link } from 'react-router-dom';
import { PostData } from '../types';
import Markdown from './utils/Markdown';
import { useUnits } from './context';
import PageLayout from './layout/PageLayout';
import ListLayout from './layout/ListLayout';
interface IProps {
  data: PostData;
}

export default function Post({ data }: IProps) {
  const unit = useUnits();
  return (
    <PageLayout title={data.title}>
      <article>
        <img src={data.articleLink?.image.base} />
        <div>
          <h1>{data.title}</h1>
          <div>
            <label>Published: </label>
            <span>{data.publishDate.toLocaleString()}</span>
          </div>
          {data.recipeLinks?.length &&
            <ListLayout>
              {data.recipeLinks.map(({ url, name }) =>
                <Link key={url} to={url}>{name}</Link>
              )}
            </ListLayout>
          }
        </div>
        <hr />
        <section>
          <Markdown markdown={data.blog[unit]} />
        </section>
      </article>
    </PageLayout>
  );
}
