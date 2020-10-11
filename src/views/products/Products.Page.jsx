// ==> BASIC:
import React, { useContext } from 'react';
// ==> UTILITIES:
import { ProductContext } from '../../context/products.Context';

// ==> COMPONENTS:


// ==> VIEWER:
const ProductsPage = () => {
  const response = useContext(ProductContext);
  console.log(response);
  return (
    <div>
      <h1>ProductsPage</h1>
    </div>
  );
};

export default ProductsPage;
