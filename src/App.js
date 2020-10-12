// ==> BASIC:
import React from 'react';
import './styles/app.sass';

// ==> UTILITIES:
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// ==> PAGES:
import AboutPage from './views/about/About.Page';
import HomePage from './views/home/Home.Page';
import CartPage from './views/cart/Cart.Page';
import CheckoutPage from './views/checkout/Checkout.Page';
import ErrorPage from './views/error/Error.Page';
import LoginPage from './views/login/Login.Page';
import ProductsPage from './views/products/Products.Page';
import ProductDetailsPage from './views/productDetails/ProductDetails.Page';

// ==> COMPONENTS:
import Header from './components/header/Header.Component';

// ==> vintage ROOT APP:
export default function App() {
  return (
    <Router>
      {/* header component 'navbar' */}
      <Header />

      <Switch>
        {/* pome page */}
        <Route exact path="/">
          <HomePage />
        </Route>

        {/* about page */}
        <Route path="/about">
          <AboutPage />
        </Route>

        {/* cart page */}
        <Route path="/cart-contents">
          <CartPage />
        </Route>

        {/* checkout page */}
        <Route path="/checkout">
          <CheckoutPage />
        </Route>

        {/* login page */}
        <Route path="/login">
          <LoginPage />
        </Route>

        {/* recipes page */}
        <Route exact path="/recipes">
          <ProductsPage />
        </Route>

        {/* recipesDetails page */}
        <Route path="/recipes/:id">
          <ProductDetailsPage />
        </Route>

        {/* error page */}
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

// //  {/* recipes menu page */}
//  <Route exact path="/recipes/drinks">
//  <DrinksPage />
// </Route>

// {/* recipes menu page */}
// <Route exact path="/recipes/food">
//  <FoodPage />
// </Route>

// {/* recipes menu page */}
// <Route exact path="/recipes/deserters">
//  <DesertersPage />
// </Route>

// {/* recipesDetails page */}
// <Route path="/recipes/drinks/:id">
//  <ProductDetailsPage />
// </Route>

// {/* recipesDetails page */}
// <Route path="/recipes/food/:id">
//  <ProductDetailsPage />
// </Route>
