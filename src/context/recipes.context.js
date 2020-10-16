/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
// ==> UTILITIES:
import axios from 'axios';
import { client } from '../utils/contentful';
import servicesData from './comps-data/Services.data';
import teamMembers from './comps-data/TeamMembers.data';
import openingData from './comps-data/Opening.data';

// create react context:
export const ProductContext = React.createContext();

// ==> PROVIDER:
const ProductProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [recipes, setRecipes] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  const [toTopBtn, setToTopBtn] = React.useState(false);
  const [cartList, setCart] = React.useState([]);

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
    let finalRecipesArr = items.map((item) => {
      // get th ID
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
    setFeatured(featuredRecipes);

    // send destructeur recipes arr to it's HOOK:
    setRecipes(finalRecipesArr);
  };

  // ==> SINGLE RECIPE FUNCTIONALITY:
  const getClickedRecipe = (slug) => {
    let singleRecipe = recipes.find((recipe) => recipe.slug === slug);

    // set this single-recipe to localStorage
    localStorage.setItem('singleRecipe', JSON.stringify(singleRecipe));

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  // get single-recipe back from localStorage:
  const getLocalStorageRecipe = () => {
    let storedRecipe = localStorage.getItem('singleRecipe');
    return storedRecipe ? JSON.parse(storedRecipe) : {};
  };

  // ==> SETUP CART FUNCTIONALITY:
  // const addRecipeToCart = (id) => {};

  // ==> SETUP TO TOP BUTTON FUNCTIONALITY:
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  function scrolledSpace(e) {
    if (this.scrollY >= 900) setToTopBtn(true);
    else setToTopBtn(false);
  }
  window.onscroll = scrolledSpace;

  return (
    <ProductContext.Provider
      value={{
        loading,
        recipes,
        goToTop,
        featured,
        toTopBtn,
        teamMembers,
        openingData,
        servicesData,
        getClickedRecipe,
        getLocalStorageRecipe,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
