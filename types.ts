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
export interface Recipe {
  ingredients: Ingredient[];
  steps: {
    [U in Units]: Markdown;
  };
}
type SelectedParameterId = string;
export interface PostDataHeader {
  title: string;
  publishDate: Date;
  heroImage: Image;
  timeEstimate: number;
  articleLink?: NamedLink;
  recipeLinks?: NamedLink[];
  difficulty: Difficulty;
  slug: string;
}
export interface PostData extends PostDataHeader {
  parameters: Parameter[];
  recipes: Map<SelectedParameterId, Recipe>;
  blog: { [U in Units]: Markdown };
};
