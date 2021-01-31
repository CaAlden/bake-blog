import * as iots from 'io-ts';
import { isLeft } from 'fp-ts/lib/Either';
export interface Image {
  base: string;
  large?: string;
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
  amount: {[U in Units]: string };
}

type Markdown = string;
export interface IRecipeDetail {
  ingredients: Ingredient[];
  steps: {
    [U in Units]: Markdown;
  };
}
export interface Recipe<P extends Parameter[]> {
  difficulty: Difficulty;
  parameters: P;
  description: string;
  link: NamedLink;
  details: {
    [K in P[number]['name']]: IRecipeDetail
  };
}
export interface PostDataHeader {
  title: string;
  description: string;
  author?: string;
  publishDate: Date;
  timeEstimate: number;
  articleLink: NamedLink;
}
export interface PostData extends PostDataHeader {
  recipes: Map<string, Recipe<any>>;
  blog: { [U in Units]: Markdown };
};
