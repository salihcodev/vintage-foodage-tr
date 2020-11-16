/* eslint-disable react/prop-types */
// ==> BASIC:
import React, { useState, useEffect } from 'react';
// ==> UTILITIES:
import { client } from '../utils/contentful';
import servicesData from './comps-data/Services.data';
import teamMembers from './comps-data/TeamMembers.data';
import openingData from './comps-data/Opening.data';
import {
  Projects,
  Support,
  Company,
  companyExperience,
} from './comps-data/Footer.data';
import { CompanyData, CompanyFounders } from './comps-data/About.data';

// create react context:
export const ProductContext = React.createContext();

// ==> PROVIDER:
const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [toTopBtn, setToTopBtn] = useState(false);
  const [isXsScreen, setIsXsScreen] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [recipesToFilter, setRecipesToFilter] = useState([]);
  const [totalTax, setTotalTax] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalCartItemsPrice, setTotalCartItemsPrice] = useState(0);
  const [subtotalCartItemsPrice, setSubtotalCartItemsPrice] = useState(0);
  const [sudoErrorHandler, setSudoErrorHandler] = useState({
    errMsg: '',
    show: false,
  });

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'foodage',
      })
      .then((response) => destructeurAPICall(response.items))
      .catch(console.error);
  }, []);

  // ==> CALCULATE CONTENTFUL API:
  const destructeurAPICall = (items) => {
    setLoading(true);
    let finalRecipesArr = items.map((item) => {
      // get the ID
      const { id } = item.sys;
      // get recipes arr of imgs
      const recipeImgs = item.fields.recipeImgs.map(({ fields }) => {
        const { url } = fields.file;
        const title = fields.title;
        const imgs = { url, title };
        return imgs;
      });
      // final recipe object
      const desItem = { id, ...item.fields, recipeImgs };

      return desItem;
    });

    // filter featured recipes
    let featuredRecipes = finalRecipesArr.filter(
      (recipe) => recipe.popular === true,
    );
    // send destructeur recipes arr to it's HOOK:
    setPopularRecipes(featuredRecipes);
    setRecipes(finalRecipesArr);
    setRecipesToFilter(finalRecipesArr);
    setLoading(false);
  };

  // ==> UTILITIES
  // error handler
  const toggleErrorHandler = (errMsg, show) => {
    setSudoErrorHandler({ errMsg, show });
  };

  // extra small screen toggler
  const toggleXsHeader = () => setIsXsScreen((state) => !state);

  // ==> SINGLE RECIPE FUNCTIONALITY:
  const getClickedRecipe = (slug) => {
    let singleRecipe = recipes.find((recipe) => recipe.slug === slug);
    syncSingleRecipe(singleRecipe);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  // ==> PLAY WITH LOCALSTORAGE:
  // SINGLE RECIPE:
  // set this single-recipe to localStorage
  const syncSingleRecipe = (singleRecipe) => {
    localStorage.setItem('singleRecipe', JSON.stringify(singleRecipe));
  };

  // get single-recipe back from localStorage:
  const getLocalRecipe = () => {
    let storedRecipe = localStorage.getItem('singleRecipe');
    return storedRecipe ? JSON.parse(storedRecipe) : {};
  };

  // CART:
  const syncCartContents = (tempCart) => {
    localStorage.setItem('cartContents', JSON.stringify(tempCart));
  };

  const getLocalCart = () => {
    let storedCart = localStorage.getItem('cartContents');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  // ==> SETUP CART FUNCTIONALITY:
  // ITEM TO ADD:
  // handel coming item from user:
  const addRecipeToCart = (id) => {
    let AllRecipes = [...recipes];
    let tempCart = [...cartList];

    // if itemToAdd is `false`
    let itemToAdd = tempCart.find((item) => item.id === id);
    if (!itemToAdd) {
      // add it to cart with two additional props [userCount, totalPrice]:
      itemToAdd = AllRecipes.find((item) => item.id === id);
      let totalPrice = itemToAdd.price;
      let tempRecipe = { ...itemToAdd, userCount: 1, totalPrice };
      tempCart = [...tempCart, tempRecipe];

      // if it `true` make sum on additional new props:
    } else {
      itemToAdd.userCount++;
      itemToAdd.totalPrice = itemToAdd.userCount * itemToAdd.price;
    }
    // fill cart HOOK with tempCart
    setCartList(tempCart);

    // stor cart to local
    syncCartContents(tempCart);
    // get cart totals [taxes, subtotal, total]
    getCartTotal();
  };

  // ITEM TO DECREASE:
  const decreaseItemFromCart = (id) => {
    let tempCart = [...cartList];

    let itemToDecrease = tempCart.find((item) => item.id === id);
    if (itemToDecrease.userCount === 1) {
      tempCart = tempCart.filter((item) => item.id !== id);
    } else {
      itemToDecrease.userCount--;
      itemToDecrease.totalPrice =
        itemToDecrease.userCount * itemToDecrease.price;
    }

    // fill cart HOOK with tempCart
    setCartList(tempCart);
    // stor cart to local
    syncCartContents(tempCart);
    getCartTotal();
  };

  // ITEM TO REMOVE:
  const removeRecipeFromCart = (id) => {
    let tempCart = [...cartList];
    let cartWithoutItem = tempCart.filter((item) => item.id !== id);

    // fill cart HOOK with tempCart
    setCartList(cartWithoutItem);
    // stor cart to local
    syncCartContents(cartWithoutItem);
    getCartTotal();
  };

  // WIPE CART:
  const wipeCart = () => {
    setCartList([]);
    syncCartContents([]);
    getCartTotal();
  };

  // ==> GET CART TOTALS:
  const calcCartTotals = (localCart) => {
    if (localCart.length > 0) {
      // cart subtotal:
      // set initial accumulator to start with in first round.
      const initialAccForPrice = localCart[0].totalPrice;

      let ItemsSubTotal = localCart.reduce((acc, curr) => {
        return acc + curr.totalPrice;
      }, initialAccForPrice);

      // ==> cart items total:
      let totalUserCount = localCart.reduce((acc, curr) => {
        return acc + curr.userCount;
      }, 0);

      // convert total price to fixed number:
      let fixedCartSubTotal = Math.ceil(ItemsSubTotal);

      // cart total:
      let cartTotal = ItemsSubTotal + totalUserCount * 3.8;
      let fixedCartTotal = Math.ceil(cartTotal);

      let totalCartTax = fixedCartTotal - fixedCartSubTotal;
      // fill to it's HOOKS:
      setTotalCartItems(totalUserCount);
      setSubtotalCartItemsPrice(fixedCartSubTotal);
      setTotalCartItemsPrice(fixedCartTotal);
      setTotalTax(totalCartTax);
    } else {
      setTotalCartItems(0);
      setSubtotalCartItemsPrice(0);
      setTotalCartItemsPrice(0);
      setTotalTax(0);
    }
  };

  // ==> SETUP TO SEARCHING FUNCTIONALITY:
  // SEARCH QUERY:
  const filterByTitle = (searchQuery) => {
    let AllRecipes = [...recipesToFilter];

    if (searchQuery.length >= 3) {
      setLoading(true);
      toggleErrorHandler(``, false);
      setShowSearchResult(true);
      let searchResult = AllRecipes.filter((item) => {
        const cleanSearchName = item.recipeName.toLowerCase();
        return cleanSearchName.includes(searchQuery);
      });
      setLoading(false);
      setRecipesToFilter(searchResult);
    } else {
      setRecipesToFilter(recipes);
      setShowSearchResult(false);
      toggleErrorHandler(
        `Your search query should be at least 3 character`,
        true,
      );
    }
  };

  const getCartTotal = () => {
    calcCartTotals(getLocalCart());
  };

  // ==> SCROLL TO TOP METHOD:
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  // ==> SETUP TO TOP BUTTON FUNCTIONALITY:
  function scrolledSpace() {
    if (this.scrollY >= 900) setToTopBtn(true);
    else setToTopBtn(false);
  }
  window.onscroll = scrolledSpace;

  // LIFE CYCLES:
  useEffect(() => {
    if (getLocalCart().length === 0) {
      console.log();
    } else {
      setCartList(getLocalCart());
      getCartTotal();
    }
    return () => {};
  }, []);

  return (
    <ProductContext.Provider
      value={{
        loading,
        Support,
        recipes,
        goToTop,
        Company,
        Projects,
        toTopBtn,
        wipeCart,
        cartList,
        totalTax,
        isXsScreen,
        openingData,
        teamMembers,
        CompanyData,
        servicesData,
        filterByTitle,
        popularRecipes,
        toggleXsHeader,
        totalCartItems,
        getLocalRecipe,
        CompanyFounders,
        addRecipeToCart,
        recipesToFilter,
        showSearchResult,
        getClickedRecipe,
        sudoErrorHandler,
        companyExperience,
        totalCartItemsPrice,
        setShowSearchResult,
        setSudoErrorHandler,
        removeRecipeFromCart,
        decreaseItemFromCart,
        subtotalCartItemsPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
