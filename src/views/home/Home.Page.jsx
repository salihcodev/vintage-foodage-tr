// ==> BASIC:
import React from 'react';

// ==> UTILITIES:
import { Link } from 'react-router-dom';

// ==> COMPONENTS:
import Hero from '../../components/hero/Hero.Component';
import Services from '../../components/services/Services.component';
import PopularRecipes from '../../components/popular-recipes/PopularRecipes.component';
import BookingTable from '../../components/booking-table/BookingTable.Component';
import Team from '../../components/team/Team.component';
import Opening from '../../components/opening/Opening.component';
import NewsLetter from '../../components/newsletter/Newsletter.Component';
import Contact from "../../components/contact/Contact.component"

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
        <BookingTable />
        {/* book a table */}
        <Team />
        {/* team members */}
        <Opening />
        {/* opening  */}
        <NewsLetter />
        {/* newsletter */}
        <Contact />
        {/* contact */}
      </section>
    </>
  );
};

export default HomePage;
