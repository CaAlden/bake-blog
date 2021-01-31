import { Ingredient, Units } from '../../types';
export const getEggs = (n: number): Ingredient => ({
  name: 'Egg(s)',
  amount: {
    [Units.Metric]: `${n} (approx ${n * 60}g)`,
    [Units.Imperial]: `${n}`,
  }
});

export const getYolk = (n: number): Ingredient => ({
  name: 'Egg Yolk(s)',
  amount: {
    [Units.Metric]: `${n} (approx ${n * 30}g)`,
    [Units.Imperial]: `${n}`,
  }
});

export const getEggWhite = (n: number): Ingredient => ({
  name: 'Egg Whites',
  amount: {
    [Units.Imperial]: `${n} (approx ${n * 30}g)`,
    [Units.Metric]: `${n}`,
  }
});

export const getButter = (grams: number): Ingredient => {
  const tbsp = Math.round(grams / 15);
  const sticks = tbsp / 8;
  const stickable = tbsp % 4 === 0;
  const imperial = stickable ? `${sticks} stick(s)` : `${tbsp} Tbsp`;

  return ({
    name: 'Butter',
    amount: {
      [Units.Imperial]: imperial,
      [Units.Metric]: `${grams}g`,
    }
  });
};

export const getAllPurposeFlour = (grams: number): Ingredient => ({
  name: 'All Purpose Flour',
  amount: {
    [Units.Imperial]: `${grams / 120} cups`,
    [Units.Metric]: `${grams}g`,
  },
});

export const getSugar = (grams: number): Ingredient => ({
  name: 'Sugar',
  amount: {
    [Units.Imperial]: `${grams / 200} cups`,
    [Units.Metric]: `${grams}g`,
  }
});

export const getSalt = (grams: number): Ingredient => {
  const teaspoons = Math.round(grams / 6);
  const tablespoons = teaspoons / 3;
  const remainder = teaspoons % 3;
  const imperial = tablespoons < 1 ? `${teaspoons} tsp` :
    remainder === 0 ? `${tablespoons} Tbsp` : `${tablespoons} Tspb & ${remainder} tsp`;

  return ({
    name: 'Salt',
    amount: {
      [Units.Imperial]: imperial,
      [Units.Metric]: `${grams}g`,
    }
  });
};
