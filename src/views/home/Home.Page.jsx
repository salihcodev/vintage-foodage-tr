// ==> BASIC:
import React from 'react';

// ==> UTILITIES:
import { Link } from 'react-router-dom';

// ==> COMPONENTS:
import Hero from '../../components/hero/Hero.Component';
import Services from '../../components/services/Services.component';
import PopularRecipes from '../../components/popular-recipes/PopularRecipes.component';

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
        {/* hero */}
        <PopularRecipes />
        {/* pop-recipes */}
        <Services />
        {/* services */}
      </section>
    </>
  );
};

export default HomePage;
