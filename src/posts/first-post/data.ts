import { Units, PostData, Image, SocialSites } from "../../../types";
import HeroLarge from "../../../assets/img/placeholder_large.webp";
import HeroMedium from "../../../assets/img/placeholder_medium.webp";
import HeroSmall from "../../../assets/img/placeholder_small.webp";
import { CampbellAuthor } from '../../../assets/authors';
import Blog from "./post";
import SugarCookieRecipe from './sugarCookie';
import ChocolateChipCookieRecipe from './chocolateChip';

const heroImage: Image = {
  large: HeroLarge,
  medium: HeroMedium,
  small: HeroSmall,
};

export const data: PostData = {
  title: "First Post",
  author: CampbellAuthor,
  description: "First post test description",
  articleLink: {
    url: "/posts/first-post",
    name: "First Post",
    image: heroImage,
  },
  publishDate: new Date("2021-01-23T15:04:34.281Z"),
  timeEstimate: 8,
  blog: Blog,
  recipes: new Map([
    ["sugar-cookies", SugarCookieRecipe],
    ["chocolate-chip-cookies", ChocolateChipCookieRecipe],
  ]),
};
