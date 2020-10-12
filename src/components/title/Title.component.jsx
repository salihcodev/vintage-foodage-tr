/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
import './Title.style.sass';

// ==> COMPONENT:
const Title = ({ title, subTitle }) => {
  return (
    <>
      <div className="title-container">
        <h2>
          <span className="title">{title}</span>{' '}
          <span className="subTitle">{subTitle}</span>
        </h2>
      </div>
    </>
  );
};

export default Title;
