// ==> BASIC:
import React from 'react';
import './Error.style.sass';

// ==> UTILITIES:
import NotFound404 from '../../components/notFound404/NotFound404.Component';

// VIEWER DATA:
const NotFoundMessage = 'Ooh! dead end, maybe you followed a broken link.';

// ==> VIEWER:
const ErrorPage = () => {
  return (
    <section className="notFoundBody">
      <NotFound404 NotFoundMessage={NotFoundMessage} />
    </section>
  );
};

export default ErrorPage;
