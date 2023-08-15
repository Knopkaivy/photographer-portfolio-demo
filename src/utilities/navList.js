import { starter } from '../utilities/starter';

const menu = starter.categories.map((cat) => {
  return cat.categoryName;
});

export const navList = [
  { name: 'home' },
  {
    name: 'portfolio',
    menu,
  },
  { name: 'bio' },
];
