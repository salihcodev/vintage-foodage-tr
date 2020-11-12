// ==> BASIC:
import React from 'react';
import './Header.styles.sass';

// ==> UTILITIES:
import { ProductContext } from '../../context/recipes.context';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import appLogo from '../../assets/app-logo.svg';

// ==> component data:
const routingLinks = [
  { id: 1, text: 'Home', path: '/' },
  { id: 2, text: 'About', path: '/about' },
  { id: 3, text: 'Recipes', path: '/recipes' },
  { id: 4, text: 'login', path: '/login' },
];

const Header = () => {
  const { totalCartItems } = React.useContext(ProductContext);
  return (
    <>
      <nav className="header">
        <div className="appLogo">
          <Link to="/">
            <img src={appLogo} alt="app logo" />
          </Link>
        </div>
        {/* links for users */}
        <ul className="navList navRoutes">
          {routingLinks.map((route) => (
            <li className="navRoute" key={route.id}>
              <Link to={route.path}>{route.text}</Link>
            </li>
          ))}
          <li className="navRoute">
            <Link to="/cart-contents">
              <span className="cartIcon">
                <AiOutlineShoppingCart />
                {totalCartItems > 0 && (
                  <span className="numberFlag">
                    {totalCartItems > 9 ? `9+` : totalCartItems}
                  </span>
                )}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
