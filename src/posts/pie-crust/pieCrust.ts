import HeroLarge from "../../../assets/img/placeholder_large.jpeg";
import HeroMedium from "../../../assets/img/placeholder_medium.jpeg";
import HeroSmall from "../../../assets/img/placeholder_small.jpeg";
import { Difficulty, Image, Recipe, Units } from "../../../types";

const heroImage: Image = {
  large: HeroLarge,
  medium: HeroMedium,
  small: HeroSmall,
};

const STEPS = `
`;

const pieCrust: Recipe = {
  link: {
    name: 'Pie Crusts',
    url: '/recipes/pie-crusts',
    image: heroImage,
  },
  difficulty: Difficulty.Easy,
  parameters: [],
  description: 'Learn to bake pie crusts for many different types of pies.',
  details: new Map([
    ['', {
      steps: {
        [Units.Metric]: STEPS,
        [Units.Imperial]: STEPS,
      },
      ingredients: [],
    }],
  ]),
};
