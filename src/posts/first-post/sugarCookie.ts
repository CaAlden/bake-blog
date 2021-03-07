import { Units, Recipe, Difficulty, Image, IRecipeDetail } from "../../../types";
import { getAllPurposeFlour, getButter, getEggs, getEggWhite, getSugar, getYolk } from "../../utils/ingredients";
import HeroLarge from "../../../assets/img/placeholder_large.webp";
import HeroMedium from "../../../assets/img/placeholder_medium.webp";
import HeroSmall from "../../../assets/img/placeholder_small.webp";

const heroImage: Image = {
  large: HeroLarge,
  medium: HeroMedium,
  small: HeroSmall,
};

const STEPS = `
## Sugar Cookie Core Recipe

1. Mix together the **Sugar** and **Butter** until they are smoothly encorperated. Typically it is easier to achieve a smoother texture if the **Butter** is at room temperature when you combine it.
2. Add the **Vanilla Extract** and **Eggs** to the sugar-butter mixture.
3. Finally add the **Flour** and **Baking Soda** and mix until the dough has come together.
4. Roll the dough out on a lightly floured work surface until it is thin (about [1/2 - 3/4 cm|1/4 - 1/3 in](#units)). Place the rolled out dough onto a **baking sheet** so that it can be transfered into a refridgerator to cool. When we did [the experiment](/posts/first-post) we let it cool for **1 hour**, but it can be cooled for multiple days if you are making the dough ahead of time.
5. Once you are read to bake,  preheat the **oven** to [190°C|375°F](#units) and cut your dough into your desired shape.
6. Bake the cookies for **10 - 12** minutes.
`;

const ingredientMap = {
  'Low-Low': [],
  'Low-Medium': [],
  'Low-High': [],
  'Medium-Low': [],
  'Medium-Medium': [],
  'Medium-High': [],
  'High-Low': [],
  'High-Medium': [],
  'High-High': [],
}

const getDetail = (key: keyof typeof ingredientMap):[string, IRecipeDetail] => [
  key,
  {
    steps: {
      [Units.Imperial]: STEPS,
      [Units.Metric]: STEPS,
    },
    ingredients: ingredientMap[key],
  },
];

const sugarCookie: Recipe = {
  link: {
    name: "Sugar Cookies",
    url: "/recipes/sugar-cookies",
    image: heroImage,
  },
  difficulty: Difficulty.Easy,
  parameters: [{
    name: 'Composure',
    settings: ['Low', 'Medium', 'High'],
  }, {
    name: 'Sweetness',
    settings: ['Low', 'Medium', 'High'],
  }],
  description:
    "Pick your favorite sugar cookie for any occassion using our customizable recipe!",
  details: new Map([
    ...Object.keys(ingredientMap).map(k => getDetail(k as any)),
  ]),
};

export default sugarCookie;
