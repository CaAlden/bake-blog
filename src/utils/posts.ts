import { NamedLink, PostData, Recipe } from '../../types';

export const getRecipes = (data: PostData) => {
  return Array.from(data.recipes.values());
};
