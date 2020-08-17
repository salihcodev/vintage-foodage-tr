/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
import './Hero.style.sass';

// ==> UTILITIES:
import { Container } from 'react-bootstrap';

// ==> COMPONENT DATA:
const HeroHeading = 'Think, Code, Deploy';
const HeroDescription = 'Embrace your choices  --we do';

// ==> COMPONENT:
const Hero = ({ children }) => {
  return (
    <>
      <div className="hero">
        <div className="heroContainer">
          <Container>
            <h1 className="homeHeroHeading">{HeroHeading}</h1>
            <p className="homeHeroDescription">{HeroDescription}</p>

            {children}
          </Container>
        </div>
      </div>
    </>
  );
};

export default Hero;
