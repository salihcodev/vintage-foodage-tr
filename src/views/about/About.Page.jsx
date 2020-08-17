// ==> BASIC:
import React from 'react';
import './About.style.sass';

// ==> UTILITIES:
import { v4 as uID } from 'uuid';

// ==> COMPONENTS:
import { Container } from 'react-bootstrap';
import AboutCompany from '../../components/about/aboutCompany/AboutCompany.Component';

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

// ==> VIEWER:
const AboutPage = () => {
  return (
    <>
      <article className="aboutCompanyBody">
        <Container>
          <h2>About the company</h2>
          <AboutCompany AboutCompanyData={CompanyData} />
        </Container>
      </article>
    </>
  );
};

export default AboutPage;
