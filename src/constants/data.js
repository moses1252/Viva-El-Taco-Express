import images from './images';

const Beverages = [
  {
    title: 'Horchata',
    price: '$3.5',
    tags: 'Cup | small, medium, Large',
  },
  {
    title: 'Pina',
    price: '$3.5',
    tags: 'Glass Bottle',
  },
  {
    title: 'limon',
    price: '$3.5',
    tags: 'Glass Bottle',
  },
  {
    title: 'Jamaica',
    price: '$3.5',
    tags: 'Glass Bottle',
  }
];

const Specials = [
  {
    title: '2 Sopes',
    price: '$8.15',
    tags: 'Shredded Beef or Chicken | Asada, All Pastor, or Carnitas',
  },
  {
    title: "Taco Salad",
    price: '$7.95',
    tags: 'Topped w/ beans lettuce, sour cream, guacamole, cheese & pico | Asada or Carnitas',
  },
  {
    title: 'Shrimp taco',
    price: '$12.75',
    tags: '',
  }
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { Beverages, Specials, awards };
