import { Units, PostData, Image, SocialSites } from "../../../types";
import HeroLarge from '../../../assets/img/2021-7-22-pie-crusts/cover_large.jpeg';
import HeroMedium from '../../../assets/img/2021-7-22-pie-crusts/cover_medium.jpeg';
import HeroSmall from '../../../assets/img/2021-7-22-pie-crusts/cover_small.jpeg';
import { CampbellAuthor } from '../../../assets/authors';
import Blog from './post';

const heroImage: Image = {
  large: HeroLarge,
  medium: HeroMedium,
  small: HeroSmall,
};

export const data: PostData = {
  title: "Pie Crusts",
  author: CampbellAuthor,
  description: "Learn tips and tricks for baking the perfect crust for any pie!",
  image: heroImage,
  articleLink: {
    url: "/posts/pie-crust",
    name: "Pie Crusts",
    image: heroImage,
  },
  publishDate: new Date("2021-07-22T06:38:00.825Z"),
  timeEstimate: 8,
  blog: Blog,
  recipes: new Map(),
};
