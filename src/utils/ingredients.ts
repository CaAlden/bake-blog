import { Ingredient, Units } from '../../types';
import { FLAVORING_COLOR, LEAVENING_COLOR, PROTIEN_COLOR, STARTCH_COLOR } from './Colors';

const KNOWN_DENOMINATORS: number[] = [
  2,
  3,
  4,
  5,
  8,
  10,
  12,
];

const jankyPlural = (singular: string, plural: string) => (n: number) => n <= 1 ? singular : plural;
const cups = jankyPlural('cup', 'cups');
const sticks = jankyPlural('stick', 'sticks');
export const makeIngredient = (name: string, metric: string, imperial: string, color: string, aliases: string[]): Ingredient => ({
  name,
  aliases,
  color,
  amount: {
    [Units.Metric]: metric,
    [Units.Imperial]: imperial,
  },
});

export const isIngredientMatch = (name: string, ingredient: Ingredient): boolean => {
  const testName = name.toLowerCase();
  const ingredientNames = [ingredient.name.toLowerCase(), ...(ingredient.aliases?.map(a => a.toLowerCase()) ?? [])];
  return ingredientNames.some(n => n === testName);
}

const TOLERANCE = 0.001;
const fractionDetector = (n: number): [string, string] => {
  const wholePart = Math.floor(n);
  const fraction = wholePart === 0 ? n : n % wholePart;
  const wholePartString = `${wholePart === 0 ? '' : wholePart}`;
  if (fraction <= TOLERANCE) {
    return [wholePartString, ''];
  }

  for (const denom of KNOWN_DENOMINATORS) {
    let count = 1;
    const fract = 1 / denom;
    while(count * fract < 1) {
      const test = count * fract;
      if (Math.abs(fraction - test) <= TOLERANCE) {
        const space = wholePart === 0 ? '' : ' & ';
        return [wholePartString, `${space}${count}/${denom}`];
      }
      count++;
    }
  }
  return [`${n}`, ''];
}

export const getEggs = (n: number): Ingredient => {
  const [number, fraction] = fractionDetector(n);
  return ({
    name: 'Eggs',
    aliases: ['egg'],
    color: PROTIEN_COLOR,
    amount: {
      [Units.Metric]: `${n}${fraction} (approx ${n * 60}g)`,
      [Units.Imperial]: `${n}${fraction}`,
    },
  })
};

export const getYolk = (n: number): Ingredient => {
  const [number, fraction] = fractionDetector(n);
  return ({
    name: 'Egg Yolks',
    color: PROTIEN_COLOR,
    amount: {
      [Units.Metric]: `${number}${fraction} (approx ${n * 30}g)`,
      [Units.Imperial]: `${number}${fraction}`,
    }
  });
}

export const getEggWhite = (n: number): Ingredient => {
  const [number, fraction] = fractionDetector(n);
  return ({
    name: 'Egg Whites',
    color: PROTIEN_COLOR,
    amount: {
      [Units.Imperial]: `${number}${fraction} (approx ${n * 30}g)`,
      [Units.Metric]: `${number}${fraction}`,
    }
  });
};

export const getButter = (grams: number, salted: boolean = false): Ingredient => {
  const tbsp = Math.round(grams / 15);
  const [tbspWhole, tbspFract] = fractionDetector(tbsp);
  const nSticks = tbsp / 8;
  const [stickWhole, stickFraction] = fractionDetector(nSticks);
  const stickable = tbsp % 4 === 0;
  const imperial = stickable ? `${stickWhole}${stickFraction} ${sticks(nSticks)}` : `${tbspWhole}${tbspFract} Tbsp`;

  return ({
    name: `${salted ? 'Salted ' : ''}Butter`,
    aliases: ['butter'],
    color: PROTIEN_COLOR,
    amount: {
      [Units.Imperial]: imperial,
      [Units.Metric]: `${grams}g`,
    }
  });
};

export const getAllPurposeFlour = (grams: number): Ingredient => {
  const c = grams / 120;
  const [cupsWhole, cupsFract] = fractionDetector(c);
  return ({
    name: 'All Purpose Flour',
    aliases: ['flour'],
    color: STARTCH_COLOR,
    amount: {
      [Units.Imperial]: `${cupsWhole}${cupsFract} ${cups(c)}`,
      [Units.Metric]: `${grams}g`,
    },
  });
}

export const getSugar = (grams: number): Ingredient => {
  const c = grams / 200;
  const [cupsWhole, cupsFract] = fractionDetector(c);
  return ({
    name: 'White Sugar',
    aliases: ['sugar'],
    color: FLAVORING_COLOR,
    amount: {
      [Units.Imperial]: `${cupsWhole}${cupsFract} ${cups(c)}`,
      [Units.Metric]: `${grams}g`,
    }
  });
};
export const getBrownSugar = (grams: number): Ingredient => {
  const c = grams / 200;
  const [cupsWhole, cupsFract] = fractionDetector(c);
  return ({
    name: `Brown Sugar`,
    color: FLAVORING_COLOR,
    amount: {
      [Units.Imperial]: `${cupsWhole}${cupsFract} ${cups(c)}`,
      [Units.Metric]: `${grams}g`,
    }
  });
};

const calcTspTspb = (grams: number, gramsPerTsp: number) => {
  const teaspoons = grams / gramsPerTsp;
  const tablespoons = Math.floor(teaspoons / 3);
  const remainder = teaspoons % 3;
  const [tspWhole, tspFract] = fractionDetector(remainder);
  return tablespoons < 1 ? `${tspWhole}${tspFract} tsp` :
    remainder === 0 ? `${tablespoons} Tbsp` : `${tablespoons} Tspb & ${tspWhole}${tspFract} tsp`;
}
export const getSalt = (grams: number): Ingredient => {
  const imperial = calcTspTspb(grams, 6);

  return ({
    name: 'Salt',
    color: FLAVORING_COLOR,
    amount: {
      [Units.Imperial]: imperial,
      [Units.Metric]: `${imperial} (${grams}g)`,
    }
  });
};

export const getBakingSoda = (grams: number): Ingredient => {
  const imperial = calcTspTspb(grams, 6);
  return ({
    name: 'Baking Soda',
    color: LEAVENING_COLOR,
    amount: {
      [Units.Imperial]: imperial,
      [Units.Metric]: `${imperial} (${grams}g)`,
    },
  });
};
