import * as React from 'react';
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

interface IProps {
  markdown: string;
}

export default function Markdown(props: IProps): React.ReactElement {
  return (
    unified()
    .use(parse)
    .use(remark2react)
    .processSync(props.markdown).result
  ) as React.ReactElement;
}