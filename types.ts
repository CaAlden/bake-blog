import * as iots from 'io-ts';
import { isLeft } from 'fp-ts/lib/Either';
export interface Image {
  large: string;
  medium?: string;
  small?: string;
}

export interface NamedLink {
  name: string;
  url: string;
  image: Image;
}

export enum Difficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}

export enum Units {
  Imperial = 'us',
  Metric = 'rest',
}

export interface Parameter {
  name: string;
  settings: string[];
}

export interface Ingredient {
  name: string;
  aliases?: string[];
  color: string;
  amount: {[U in Units]: string };
}

type Markdown = string;
export interface IRecipeDetail {
  ingredients: Ingredient[];
  steps: {
    [U in Units]: Markdown;
  };
}
export interface Recipe {
  parameters: Parameter[];
  difficulty: Difficulty;
  description: string;
  link: NamedLink;
  details: Map<string, IRecipeDetail>;
}

export enum SocialSites {
  Twitter = 'twitter',
  GitHub = 'github',
}
export interface ISocialLink {
  url: string;
  site: SocialSites;
};

export interface IAuthor {
  name: string;
  image: Image;
  twitterHandle?: string;
  socialLinks: ISocialLink[];
}

export interface PostDataHeader {
  title: string;
  author?: IAuthor;
  image: Image;
  description: string;
  publishDate: Date;
  timeEstimate: number;
  articleLink: NamedLink;
}
export interface PostData extends PostDataHeader {
  recipes: Map<string, Recipe>;
  blog: { [U in Units]: Markdown };
};
