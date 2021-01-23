import { PostDataHeader } from '../../../types';
import { Difficulty, PostData, Units } from '../../../types';
import Hero from '../../../assets/scooby.png';

export const header: PostDataHeader = {
  title: 'First Post',
  publishDate: new Date('2021-01-23T15:04:34.281Z'),
  heroImage: {
    base: Hero,
    small: Hero,
  },
  slug: 'first-post',
  timeEstimate: 30,
  difficulty: Difficulty.Easy,
  recipeLinks: [
    { url: '/recipes/sugar-cookies', name: 'Sugar Cookie Recipe'},
    { url: '/recipes/chocolate-chip-cookies', name: 'Chocolate Chip Cookie Recipe'},
  ]
};
