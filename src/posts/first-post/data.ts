import { Units, PostData } from '../../../types';
import { header } from './header-data';

const getBlog = (unit: Units): string => `
# Cookie Cooking

Hello all! This is the first of hopefully many blog posts in my new baking
series. For the first week, we decided to start simple with cookies. Specifically
we decided to make [Sugar Cookies](/recipes/sugar-cookies) and
 [Chocolate Chip Cookies](/recipes/chocolate-chip-cookies). And how exciting it was.
`;
export const data: PostData = {
  ...header,
  blog: {
    [Units.Metric]: getBlog(Units.Metric),
    [Units.Imperial]: getBlog(Units.Imperial),
  },
  parameters: [],
  recipes: new Map(),
};
