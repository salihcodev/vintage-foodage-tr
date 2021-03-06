/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
import './AboutCompany.styles.sass';

// ==> UTILITIES:
import { v4 as uID } from 'uuid';


const AboutCompany = ({ AboutCompanyData }) => {
  return (
    <section className="aboutCompany">
      <div className="aboutCompanyContainer">
        {AboutCompanyData.map((data) => (
          <div key={uID()} className="aboutBlock">
            <h5 className="heading">{data.heading}</h5>
            <p className="paragraph">{data.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCompany;
