// ==> BASIC:
import React from 'react';
import './About.style.sass';

// ==> UTILITIES:
import { ProductContext } from '../../context/recipes.context';

// ==> COMPONENTS:
import { Container } from 'react-bootstrap';
import AboutCompany from '../../components/about/aboutCompany/AboutCompany.Component';
import Founders from '../../components/about/founders/Founders.Component';

// ==> VIEWER:
const AboutPage = () => {
  const { CompanyData, CompanyFounders } = React.useContext(ProductContext);
  // reset window title:
  React.useEffect(() => {
    document.title = `Foodage | About`;
  });
  return (
    <>
      <article className="aboutCompanyBody">
        <Container>
          <h2 className="heading">
            <strong>About the company</strong>
          </h2>
          <AboutCompany AboutCompanyData={CompanyData} />
          <Founders CompanyFoundersData={CompanyFounders} />
        </Container>
      </article>
    </>
  );
};

export default AboutPage;
