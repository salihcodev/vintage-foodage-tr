import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { RiTwitterLine } from 'react-icons/ri';

import tM2 from '../../assets/team/tm2.jpg';
import tM4 from '../../assets/team/tm4.jpg';
import tM7 from '../../assets/team/tm7.jpg';
import tM11 from '../../assets/team/tm11.jpg';

const CompanyData = [
  {
    heading: null,
    text:
      'Since 1999, our restaurant is the center of coziness, comfort, and tasty dishes available to our every visitor and guest, Our restaurant serves breakfasts, lunches, and dinners throughout the day. Learn more about our opening hours below',
  },
  {
    heading: 'Company last experiences',
    text:
      'Our restaurant serves breakfasts, lunches, and dinners throughout the day. Learn more about our opening hours below',
  },
];

const CompanyFounders = [
  {
    img: tM2,
    name: 'Lorena Porter',
    title: 'CTO',
    founderSummary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sunt',
    contacts: [
      {
        link: 'linkedin',
        icon: FaLinkedin(),
      },
      {
        link: 'github',
        icon: AiOutlineGithub(),
      },
      {
        link: 'twitter',
        icon: RiTwitterLine(),
      },
    ],
  },
  {
    img: tM4,
    name: 'Kailey Wong',
    title: 'Cheef',
    founderSummary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sunt',
    contacts: [
      {
        link: 'linkedin',
        icon: FaLinkedin(),
      },
      {
        link: 'github',
        icon: AiOutlineGithub(),
      },
      {
        link: 'twitter',
        icon: RiTwitterLine(),
      },
    ],
  },
  {
    img: tM7,
    name: 'Shania Valdez',
    title: 'Restaurant Owner',
    founderSummary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sunt',
    contacts: [
      {
        link: 'linkedin',
        icon: FaLinkedin(),
      },
      {
        link: 'github',
        icon: AiOutlineGithub(),
      },
      {
        link: 'twitter',
        icon: RiTwitterLine(),
      },
    ],
  },
];

export { CompanyData, CompanyFounders };
