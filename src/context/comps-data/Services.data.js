import { GiFruitBowl } from 'react-icons/gi';
import { FaBalanceScaleRight } from 'react-icons/fa';
import { FaCocktail } from 'react-icons/fa';

const servicesData = [
  {
    icon: GiFruitBowl(),
    name: 'Ingredients',
    description:
      'We use the freshest ingredients delivered daily by our reliable suppliers.',
    list: ['Vegetables & Fruits', 'Spices', 'Meats & Fish', 'Baking & Grains'],
  },
  {
    icon: FaBalanceScaleRight(),
    name: 'Techniques',
    description:
      'Our team uses the latest techniques to prepare tasty and outstanding dishes.',
    list: ['Freezing', 'Slow Roasting', 'Sous Vide Cooking', 'Thickening'],
  },
  {
    icon: FaCocktail(),
    name: 'Community',
    description:
      'We work for the benefit of the local community and contribute to society.',
    list: [
      'Saving Energy',
      'Recycling',
      'Sponsorship ',
      'Community Cooperation',
    ],
  },
];

export default servicesData;
