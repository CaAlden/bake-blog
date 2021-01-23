import * as React from 'react';
import { PostData } from '../types';
import Markdown from './utils/Markdown';
interface IProps {
  data: PostData;
}

export default function Recipe({ data }: IProps) {
  return (
    <article>
      <h1>{data.title}</h1>
      <hr />
      <section>
        <Markdown markdown={data.blog.us} />
      </section>
    </article>
  );
}
