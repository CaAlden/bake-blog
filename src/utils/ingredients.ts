import { Ingredient, Units } from '../../types';

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
    amount: {
      [Units.Metric]: `${n}${fraction} (approx ${n * 60}g)`,
      [Units.Imperial]: `${n}${fraction}`,
    }
  })
};

export const getYolk = (n: number): Ingredient => {
  const [number, fraction] = fractionDetector(n);
  return ({
    name: 'Egg Yolks',
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
    amount: {
      [Units.Imperial]: `${number}${fraction} (approx ${n * 30}g)`,
      [Units.Metric]: `${number}${fraction}`,
    }
  });
};

export const getButter = (grams: number): Ingredient => {
  const tbsp = Math.round(grams / 15);
  const [tbspWhole, tbspFract] = fractionDetector(tbsp);
  const nSticks = tbsp / 8;
  const stickable = tbsp % 4 === 0;
  const imperial = stickable ? `${nSticks} ${sticks(nSticks)}` : `${tbspWhole}${tbspFract} Tbsp`;

  return ({
    name: 'Butter',
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
    name: 'Sugar',
    amount: {
      [Units.Imperial]: `${cupsWhole}${cupsFract} ${cups(c)}`,
      [Units.Metric]: `${grams}g`,
    }
  });
};

export const getSalt = (grams: number): Ingredient => {
  const teaspoons = grams / 6;
  const tablespoons = Math.floor(teaspoons / 3);
  const remainder = teaspoons % 3;
  const [tspWhole, tspFract] = fractionDetector(remainder);
  const imperial = tablespoons < 1 ? `${tspWhole}${tspFract} tsp` :
    remainder === 0 ? `${tablespoons} Tbsp` : `${tablespoons} Tspb & ${tspWhole}${tspFract} tsp`;

  return ({
    name: 'Salt',
    amount: {
      [Units.Imperial]: imperial,
      [Units.Metric]: `${grams}g`,
    }
  });
};
