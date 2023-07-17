import { ReactComponent as One } from '../assets/one.svg';
import { ReactComponent as Two } from '../assets/Two.svg';
import { ReactComponent as Three } from '../assets/three.svg';
import { ReactComponent as Five } from '../assets/five.svg';

export const optionWine = {
  name: 'Wine & Beer',
  menu: [
    {
      meal: 'Chapel Hill Shiraz',
      content: 'AU | Bottle',
      price: '$56',
    },
    {
      meal: 'Catena Malbec',
      content: 'AR | Bottle',
      price: '$59',
    },
    {
      meal: 'La Vieille Rosé',
      content: 'FR | 750 ml',
      price: '$44',
    },
    {
      meal: 'Rhino Pale Ale',
      content: 'CA | 750 ml',
      price: '$31',
    },
    {
      meal: 'Irish Guinness',
      content: 'IE | 750 ml',
      price: '$26',
    },
  ],
};

export const optionCocktail = {
  name: 'Cocktails',
  menu: [
    {
      meal: 'Aperol Spritz',
      content: 'Aperol | Villa Marchesi prosecco | soda | 30ml',
      price: '$20',
    },
    {
      meal: `Dark 'N' Stormy`,
      content: 'Dark rum | Ginger beer | Slice of lime. ',
      price: '$16',
    },
    {
      meal: 'Daiquiri',
      content: 'Rum | Citrus juice | Sugar',
      price: '$10',
    },
    {
      meal: 'Old Fashioned',
      content: 'Bourbon | Brown sugar | Angostura Bitters',
      price: '$31',
    },
    {
      meal: 'Negroni',
      content: 'Gin | Sweet Vermouth | Campari | Orange garnish',
      price: '$26',
    },
  ],
};

export const laurelOptionOne = [
  {
    svg: <Two />,
    header: 'Bib Gourmond',
    content: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    svg: <One />,
    header: 'Rising Star',
    content: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export const laurelOptionTwo = [
  {
    svg: <Five />,
    header: 'AA Hospitality ',
    content: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    svg: <Three />,
    header: 'Outstanding Chef',
    content: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];
