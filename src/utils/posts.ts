import { NamedLink, PostDataHeader } from '../../types';

export const getRecipes = (data: PostDataHeader) => {
  const recipes = data.recipeLinks.map((r) => {
    return [r, data] as const;
  });
  return recipes;
};
