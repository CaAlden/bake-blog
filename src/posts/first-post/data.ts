import { Units, PostData, Image, SocialSites } from "../../../types";
import HeroLarge from "../../../assets/img/2021-2-28-first-post/chocolate-chip-cookie-hero_large.webp";
import HeroMedium from "../../../assets/img/2021-2-28-first-post/chocolate-chip-cookie-hero_medium.webp";
import HeroSmall from "../../../assets/img/2021-2-28-first-post/chocolate-chip-cookie-hero_small.webp";
import LinkImageLarge from "../../../assets/img/2021-2-28-first-post/chocolate-chip-cookie-plate_large.webp";
import LinkImageMedium from "../../../assets/img/2021-2-28-first-post/chocolate-chip-cookie-plate_medium.webp";
import LinkImageSmall from "../../../assets/img/2021-2-28-first-post/chocolate-chip-cookie-plate_small.webp";
import { CampbellAuthor } from '../../../assets/authors';
import Blog from "./post";
import SugarCookieRecipe from './sugarCookie';
import ChocolateChipCookieRecipe from './chocolateChip';

const heroImage: Image = {
  large: HeroLarge,
  medium: HeroMedium,
  small: HeroSmall,
};

const linkImage: Image = {
  large: LinkImageLarge,
  medium: LinkImageMedium,
  small: LinkImageSmall,
}

export const data: PostData = {
  title: "First Post",
  author: CampbellAuthor,
  description: "Read about our discoveries in the world of cookies as we get up to speed in our first ever bake lab post!",
  image: heroImage,
  articleLink: {
    url: "/posts/first-post",
    name: "First Post",
    image: linkImage,
  },
  publishDate: new Date("2021-01-23T15:04:34.281Z"),
  timeEstimate: 8,
  blog: Blog,
  recipes: new Map([
    ["sugar-cookies", SugarCookieRecipe],
    ["chocolate-chip-cookies", ChocolateChipCookieRecipe],
  ]),
};
