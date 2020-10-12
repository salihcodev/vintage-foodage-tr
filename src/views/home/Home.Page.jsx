// ==> BASIC:
import React from 'react';

// ==> UTILITIES:
import { Link } from 'react-router-dom';

// ==> COMPONENTS:
import Hero from '../../components/hero/Hero.Component';

// ==> VIEWER:
const HomePage = () => {
  return (
    <>
      <section className="homePageViewer">
        <Hero>
          <Link to="/recipes">
            <button type="button" className="HomeHeroToProducts">
              All Recipes
            </button>
          </Link>
        </Hero>
      </section>
    </>
  );
};

export default HomePage;
