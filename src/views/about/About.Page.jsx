// ==> BASIC:
import React from 'react';
import './About.style.sass';

// ==> UTILITIES:
import { v4 as uID } from 'uuid';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { RiTwitterLine } from 'react-icons/ri';

// ==> COMPONENTS:
import { Container } from 'react-bootstrap';
import AboutCompany from '../../components/about/aboutCompany/AboutCompany.Component';
import Founders from '../../components/about/founders/Founders.Component';

// ==> PAGE DATA:
const CompanyData = [
  {
    id: uID(),
    heading: null,
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam alias perspiciatis doloribus. Optio nisi tenetur aperiam aspernatur corrupti tempore, ad dignissimos neque quibusdam eius officiis obcaecati amet praesentium esse omnis!',
  },
  {
    id: uID(),
    heading: 'company last experiences',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam alias perspiciatis doloribus. Optio nisi tenetur aperiam aspernatur corru',
  },
];

const CompanyFounders = [
  {
    id: uID(),
    img: 'img',
    name: 'name',
    title: 'title',
    founderSummary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sunt',
    contacts: [
      {
        id: uID(),
        link: 'linkedin',
        icon: <FaLinkedin />,
      },
      {
        id: uID(),
        link: 'github',
        icon: <AiOutlineGithub />,
      },
      {
        id: uID(),
        link: 'twitter',
        icon: <RiTwitterLine />,
      },
    ],
  },
  {
    id: uID(),
    img: 'img',
    name: 'name',
    title: 'title',
    founderSummary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sunt',
    contacts: [
      {
        id: uID(),
        link: 'linkedin',
        icon: <FaLinkedin />,
      },
      {
        id: uID(),
        link: 'github',
        icon: <AiOutlineGithub />,
      },
      {
        id: uID(),
        link: 'twitter',
        icon: <RiTwitterLine />,
      },
    ],
  },
  {
    id: uID(),
    img: '',
    name: 'name',
    title: 'title',
    founderSummary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sunt',
    contacts: [
      {
        id: uID(),
        link: 'linkedin',
        icon: <FaLinkedin />,
      },
      {
        id: uID(),
        link: 'github',
        icon: <AiOutlineGithub />,
      },
      {
        id: uID(),
        link: 'twitter',
        icon: <RiTwitterLine />,
      },
    ],
  },
  {
    id: uID(),
    img: '',
    name: 'name',
    title: 'title',
    founderSummary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sunt',
    contacts: [
      {
        id: uID(),
        link: 'linkedin',
        icon: <FaLinkedin />,
      },
      {
        id: uID(),
        link: 'github',
        icon: <AiOutlineGithub />,
      },
      {
        id: uID(),
        link: 'twitter',
        icon: <RiTwitterLine />,
      },
    ],
  },
];

// ==> VIEWER:
const AboutPage = () => {
  // reset window title:
  React.useEffect(() => {
    document.title = `Foodage | About`;
  });
  return (
    <>
      <article className="aboutCompanyBody">
        <Container>
          <h2>About the company</h2>
          <AboutCompany AboutCompanyData={CompanyData} />
          <Founders CompanyFoundersData={CompanyFounders} />
        </Container>
      </article>
    </>
  );
};

export default AboutPage;
