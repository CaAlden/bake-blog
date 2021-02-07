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

const sugarCookie: Recipe = {
  link: {
    name: "Sugar Cookies",
    url: "/recipes/sugar-cookies",
    image: heroImage,
  },
  difficulty: Difficulty.Easy,
  parameters: [],
  description:
    "Pick your favorite sugar cookie for any occassion using our customizable recipe!",
  details: new Map([
    [
      "",
      {
        steps: {
          [Units.Imperial]: "Do it",
          [Units.Metric]: "Just do it",
        },
        ingredients: [
          {
            name: "Eggs",
            amount: {
              [Units.Metric]: "1",
              [Units.Imperial]: "1",
            },
          },
        ],
      },
    ],
  ]),
};

export default sugarCookie;
