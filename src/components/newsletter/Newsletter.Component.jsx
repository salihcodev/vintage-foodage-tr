/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
import './style.sass';

// ==> UTILITIES:

const NewsLetter = () => (
  <section className="newsletterWrapper">
    <div className="newsletter">
      <h5 className="newsFlag">
        <span className="flag">newsletter</span>
      </h5>
      <h2 className="newsHeading">Each Week a New Recipe</h2>
      <p className="newsDec">
        Subscribe to receive exclusive recipes from our chef.
      </p>
      <div className="newsForm">
        <form>
          <input
            type="email"
            name="news-letter-email"
            id="newsletterField"
            required
            placeholder="Your Email"
          />
          <input type="submit" className="newsBtn" value="Subscribe Now" />
        </form>
      </div>
    </div>
  </section>
);

export default NewsLetter;
