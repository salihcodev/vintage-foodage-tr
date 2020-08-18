// ==> BASIC:
import React from 'react';

// ==> UTILITIES:
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// ==> COMPONENTS:
import Hero from '../../components/hero/Hero.Component';

// ==> VIEWER:
const HomePage = () => {
  return (
    <>
      <section className="homePageViewer">
        <Hero>
          <Link to="/products">
            <Button type="button" className="HomeHeroToProducts">
              Browse to products
            </Button>
          </Link>
        </Hero>
      </section>
    </>
  );
};

export default HomePage;
