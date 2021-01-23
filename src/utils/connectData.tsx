import * as React from 'react';
import { PostData } from '../../types';

export default function connectData<Props>(
  data: PostData,
  Wrap: React.ComponentType<{ data: PostData } & Props>,
): React.ComponentType<Props> {

  return (props: Props) => ( <Wrap {...props} data={data} />);
}
