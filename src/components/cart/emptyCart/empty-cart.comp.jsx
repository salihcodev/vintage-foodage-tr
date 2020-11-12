import React from 'react';
import './style.sass';

import { Link } from 'react-router-dom';

const EmptyCart = () => (
  <div className="noCartItems">
    <div className="flexShield">
      <h2>No Cart Items Yet, To display!</h2>
      <h6>
        <strong>Put something to the cart buddy :D</strong>
      </h6>
      <Link to="/recipes" className="toRecipes">
        Visit Recipes
      </Link>
    </div>
  </div>
);

export default EmptyCart;

