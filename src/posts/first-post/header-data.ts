import { Image, PostDataHeader } from '../../../types';
import { Difficulty, PostData, Units } from '../../../types';
import Hero from '../../../assets/scooby.png';

const heroImage: Image = {
  base: Hero,
  small: Hero,
};
export const header: PostDataHeader = {
  title: 'First Post',
  description: 'First post test description',
  articleLink: {
    url: '/posts/first-post',
    name: 'First Post',
    image: heroImage,
  },
  publishDate: new Date('2021-01-23T15:04:34.281Z'),
  timeEstimate: 30,
  difficulty: Difficulty.Easy,
  recipeLinks: [
    { url: '/recipes/sugar-cookies', name: 'Sugar Cookie Recipe', image: heroImage },
    { url: '/recipes/chocolate-chip-cookies', name: 'Chocolate Chip Cookie Recipe', image: heroImage },
  ]
};
