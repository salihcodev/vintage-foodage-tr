/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
import './Hero.style.sass';

// ==> UTILITIES:
import { Container } from 'react-bootstrap';

// ==> COMPONENT DATA:
const HeroFlag = 'Old family recipes';
const HeroHeading = 'Healthy Organic Food';
const HeroDescription =
  'Feel the friendly atmosphere of our family restaurant.';

// ==> COMPONENT:
const Hero = ({ children }) => {
  return (
    <>
      <div className="hero">
        <Container>
          <section className="heroContainer">
            <p className="heroFlag">
              <span>{HeroFlag}</span>
            </p>
            <h1 className="homeHeroHeading">{HeroHeading}</h1>
            <p className="homeHeroDescription">{HeroDescription}</p>
            {children}
          </section>
        </Container>
      </div>
    </>
  );
};

export default Hero;
