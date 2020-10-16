/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
import './style.sass';

// ==> UTILITIES:

const BookingTable = () => (
  <section className="BookingWrapper">
    <div className="bookATable">
      <h5 className="recipeFlag">
        <span className="flag">experience family atmosphere</span>
      </h5>
      <h2 className="bookHeading">Book a Table</h2>
      <p className="bookDec">
        Want to enjoy the cozy atmosphere of our restaurant? Book a table now to
        get started.
      </p>
      <button className="bookBtn">Book Now</button>
    </div>
  </section>
);

export default BookingTable;
