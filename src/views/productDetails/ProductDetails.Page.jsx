import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>ProductDetailsPage</h1>
      <h1>
        product
        {id}
      </h1>
    </div>
  );
};

export default ProductDetailsPage;
