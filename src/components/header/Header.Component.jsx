// ==> BASIC:
import React from 'react';
import './Header.styles.sass';

// ==> UTILITIES:
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import appLogo from '../../assets/app-logo.svg';

// ==> component data:
const routingLinks = [
  { id: 1, text: 'Home', path: '/' },
  { id: 2, text: 'About', path: '/about' },
  { id: 3, text: 'Recipes', path: '/recipes' },
];

const Header = () => {
  return (
    <>
      <nav className="header">
        <div className="appLogo">
          <Link to="/">
            <img src={appLogo} alt="app logo" />
          </Link>
        </div>
        {/* router */}
        <ul className="navList navRouters">
          {routingLinks.map((route) => (
            <li className="navRoute" key={route.id}>
              <Link to={route.path}>{route.text}</Link>
            </li>
          ))}
        </ul>
        {/* links for users */}
        <ul className="navList userRoutes">
          <li className="navRoute">
            <Link to="/login">
              <span className="loginText">login</span>
            </Link>
          </li>
          <li className="navRoute">
            <Link to="/cart-contents">
              <span className="cartIcon">
                <AiOutlineShoppingCart />
                <span className="numberFlag">0</span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
