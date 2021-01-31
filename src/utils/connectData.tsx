import * as React from 'react';
import { PostData, Recipe } from '../../types';

export default function connectData<Props>(
  data: PostData,
  Wrap: React.ComponentType<{ data: PostData } & Props>,
): React.ComponentType<Props> {

  return (props: Props) => ( <Wrap {...props} data={data} />);
}

export function connectRecipe(
  data: Recipe,
  Wrap: React.ComponentType<{ data: Recipe }>,
): React.ComponentType {
  return () => <Wrap data={data} />;
}
