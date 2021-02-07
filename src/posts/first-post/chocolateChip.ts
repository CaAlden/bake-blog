import { Units, Recipe, Difficulty, Image } from "../../../types";
import { getAllPurposeFlour, getButter, getEggs, getEggWhite, getSugar, getYolk } from "../../utils/ingredients";
import HeroLarge from "../../../assets/img/placeholder_large.webp";
import HeroMedium from "../../../assets/img/placeholder_medium.webp";
import HeroSmall from "../../../assets/img/placeholder_small.webp";

const heroImage: Image = {
  large: HeroLarge,
  medium: HeroMedium,
  small: HeroSmall,
};



const getCrispySteps = (units: Units) => `
## Steps
**Preparation**: It is important for the butter to be kept at room tempurature (${units === Units.Imperial ? '75°F' : '25°C'})
so that the blending process is easier.

1. Preheat the **oven** to **${units === Units.Imperial ? '375°F' : '190°C'}**
2. Mix together the butter and sugar in a medium sized mixing bowl until the the mixture is smooth.
3. Add the Egg to the mixture and stir well to fully incorperate.
4. In a separate bowl, mix together the dry ingredients briefly.
5. Slowly mix in the dry ingredients with the wet until a dough forms. There should be no remaining flour.
6. Encorperate the Chocolate chips and walnuts.
7. Place golf ball sized dough spheres on a parchment paper lined cooking tray and bake in the oven for 10-12 minutes.
8. Remove from the oven and place on a wire rack to cool for 5-10 minutes.

Cookies should be eaten quickly but will keep for up to 10 days.
`;

const chocolateChip: Recipe = {
  link: {
    name: "Chocolate Chip Cookies",
    url: "/recipes/chocolate-chip-cookies",
    image: heroImage,
  },
  parameters: [{
    name: 'Texture',
    settings: ['Chewy', 'Balanced', 'Crispy'],
  }],
  difficulty: Difficulty.Easy,
  description:
    "Learn how to make chocolate chip cookies to your preference by experimenting with different ratios of yolks to egg whites!",
  details: new Map([
    [
      "Chewy",
      {
        steps: {
          [Units.Imperial]: "Do it: Chocolate",
          [Units.Metric]: "Just do it: Chocolate",
        },
        ingredients: [
          getButter(120),
          getSugar(100),
          getYolk(1),
          getAllPurposeFlour(200),
        ],
      },
    ],
    [
      "Balanced",
      {
        steps: {
          [Units.Imperial]: "Do it: Chocolate",
          [Units.Metric]: "Just do it: Chocolate",
        },
        ingredients: [
          getButter(120),
          getSugar(100),
          getYolk(1),
          getEggWhite(0.5),
          getAllPurposeFlour(200),
        ],
      },
    ],
    [
      "Crispy",
      {
        steps: {
          [Units.Imperial]: getCrispySteps(Units.Imperial),
          [Units.Metric]: getCrispySteps(Units.Metric),
        },
        ingredients: [
          getButter(120),
          getSugar(100),
          getEggs(1),
          getAllPurposeFlour(200),
        ],
      },
    ],
  ]),
};

export default chocolateChip;
