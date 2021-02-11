import { Units, Recipe, Difficulty, Image, Ingredient } from "../../../types";
import { getAllPurposeFlour, getBakingSoda, getButter, getEggs, getEggWhite, getSugar, getYolk, makeIngredient } from "../../utils/ingredients";
import HeroLarge from "../../../assets/img/placeholder_large.webp";
import HeroMedium from "../../../assets/img/placeholder_medium.webp";
import HeroSmall from "../../../assets/img/placeholder_small.webp";

const heroImage: Image = {
  large: HeroLarge,
  medium: HeroMedium,
  small: HeroSmall,
};

const opening = (units: Units) => `
## Preparation:

It is important for the **butter** to be kept at room tempurature (${units === Units.Imperial ? '75°F' : '25°C'}).
If the butter is too cold it will be difficult to uniformly/smoothly mix it with the **sugar**.

## Recipe

1. Preheat the **oven** to **${units === Units.Metric ? '190°C' : '375°F'}**.
2. Mix together the **butter**, **white sugar**, and **brown sugar** in a medium sized mixing bowl until the the mixture is smooth.
3. In a separate bowl, mix together the **flour** and **baking soda**.`;

const remainingSteps = (units: Units, n: number) => `
${n}. Mix the dry ingredients from the separate bowl with the wet mixture. Add the **chocolate chips** and **walnuts** into the mixture.
${n + 2}. Scoop approximately **24** golf ball sized spheres of dough onto a **parchment paper** lined baking tray and bake in the **oven** for **10-12** minutes.
${n + 3}. Allow to cool on a **wire rack** before eating!
`;

const getCrispySteps = (units: Units) => `
${opening(units)}
4. Whisk in the **egg** and **vanilla extract**.
${remainingSteps(units, 5)}

## Notes

These cripsy cookies taste best freshout of the oven, but will keep for up to **10** days.
`;

const getBalancedSteps = (units: Units) => `
${opening(units)}
4. Separate one **egg yolk** and add it plus one **egg** to the mixture. Whisk to incorperate then add the **vanilla extract**
${remainingSteps(units, 5)}

## Notes

These cookies should be slightly chewier than their whole egg counterparts and will keep for up to **10** days. They will
remain fully chewy for at least a **week**.
`

const getChewySteps = (units: Units) => `
${opening(units)}
${remainingSteps(units, 6)}

## Notes

These cookies should keep for up to **10** days and will remain almost brownie-like for at least a **week**, although
we found that these were best straight out of the oven.
`;

const getIgs = (eggIngredients: Ingredient[]): Ingredient[] => [
  getButter(175, true),
  getSugar(150),
  getSugar(150, true),
  ...eggIngredients,
  getAllPurposeFlour(280),
  getBakingSoda(3),
  makeIngredient('Vanilla Extract', '2tsp (8.4g)', '2 tsp'),
  makeIngredient('Chocolate Chips', '270g', '1 & 1/2 cups'),
  makeIngredient('Chopped Walnuts', '125g', '1 cup'),
];
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
          [Units.Imperial]: getChewySteps(Units.Imperial),
          [Units.Metric]: getChewySteps(Units.Metric),
        },
        ingredients: getIgs([getYolk(2)]),
      },
    ],
    [
      "Balanced",
      {
        steps: {
          [Units.Imperial]: getBalancedSteps(Units.Imperial),
          [Units.Metric]: getBalancedSteps(Units.Metric),
        },
        ingredients: getIgs([getYolk(1), getEggs(1)]),
      },
    ],
    [
      "Crispy",
      {
        steps: {
          [Units.Imperial]: getCrispySteps(Units.Imperial),
          [Units.Metric]: getCrispySteps(Units.Metric),
        },
        ingredients: getIgs([getEggs(2)]),
      },
    ],
  ]),
};

export default chocolateChip;
