// ==> BASIC:
import React from 'react';
import './NotFound404.styles.sass';

// ==> UTILITIES:
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const NotFound404 = ({ NotFoundMessage }) => {
  return (
    <>
      <section className="notFound404">
        <div className="notFoundContainer">
          <p className="notFoundMessage">
            <span className="notFoundFlag">404</span>
            {NotFoundMessage}
          </p>
          <Link to="/">
            <button type="button" className="homeRedirect">
              <span className="redirectIcon">
                <FaLongArrowAltLeft />
              </span>
              <span className="redirectText">Back to home</span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound404;
