// ==> BASIC:
import React from 'react';
import './Header.styles.sass';

// ==> UTILITIES:
import { ProductContext } from '../../context/recipes.context';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container } from 'react-bootstrap';
import appLogo from '../../assets/app-logo.svg';

// ==> component data:
const routingLinks = [
  { id: 1, text: 'Home', path: '/' },
  { id: 2, text: 'About', path: '/about' },
  { id: 3, text: 'Recipes', path: '/recipes' },
  { id: 4, text: 'login', path: '/login' },
];

const Header = () => {
  const { totalCartItems, toggleXsHeader, isXsScreen } = React.useContext(
    ProductContext,
  );
  return (
    <>
      <Container>
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
                <NavLink exact activeClassName="isNavRouteActive" to={route.path}>
                  {route.text}
                </NavLink>
              </li>
            ))}
            <li className="navRoute">
              <NavLink to="/cart-contents">
                <span className="cartIcon">
                  <AiOutlineShoppingCart />
                  {totalCartItems > 0 && (
                    <span className="numberFlag">
                      {totalCartItems > 9 ? `9+` : totalCartItems}
                    </span>
                  )}
                </span>
              </NavLink>
            </li>
          </ul>
          <div className="smNavToggler">
            <button className="toggler" onClick={toggleXsHeader}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            {isXsScreen && (
              <ul className="smNavRoutes">
                <li className="navRoute">
                  <NavLink to="/cart-contents">
                    <span className="cartIcon">
                      <AiOutlineShoppingCart />
                      {totalCartItems > 0 && (
                        <span className="numberFlag">
                          {totalCartItems > 9 ? `9+` : totalCartItems}
                        </span>
                      )}
                    </span>
                  </NavLink>
                </li>
                {routingLinks.map((route) => (
                  <li className="navRoute" key={route.id}>
                    <NavLink exact activeClassName="isNavRouteActive" to={route.path}>
                      {route.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Header;
