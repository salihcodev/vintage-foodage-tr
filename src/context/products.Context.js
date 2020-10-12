/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
// ==> UTILITIES:
import axios from 'axios';
import Url from '../utils/URL';
import ServicesData from './comps-data/Services.data';

export const ProductContext = React.createContext();
// ==> PROVIDER:
const ProductProvider = ({ children }) => {
  const [Loading, setLoading] = React.useState(false);
  const [Products, setProducts] = React.useState([]);
  const [Featured, setFeatured] = React.useState([]);

  // ==> FETCHED DATA:
  React.useEffect(() => {
    axios
      .get(`${Url}/products`)
      .then((vintageProducts) => console.log(vintageProducts));
    return () => {};
  });

  return (
    <ProductContext.Provider
      value={{ Loading, Products, Featured, ServicesData }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
