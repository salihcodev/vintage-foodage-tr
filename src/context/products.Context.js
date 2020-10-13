/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
// ==> UTILITIES:
import axios from 'axios';
import { client } from '../utils/contentful';
import servicesData from './comps-data/Services.data';

export const ProductContext = React.createContext();
// ==> PROVIDER:
const ProductProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [recipes, setRecipes] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  // calculate contentful API
  const destructeurAPICall = (items) => {
    let finalRecipesArr = items.map((item) => {
      // get th ID
      const { id } = item.sys;
      // get recipes arr of imgs
      const recipeImgs = item.fields.recipeImgs.map(({ fields }) => {
        const url = fields.file.url;
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

  // ==> FETCHED DATA:
  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'foodage',
      })
      .then((response) => destructeurAPICall(response.items))
      .catch(console.error);
  }, []);

  return (
    <ProductContext.Provider
      value={{ loading, recipes, featured, servicesData }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
