// ==> BASIC:
import React from 'react';
import './style.sass';

// ==> UTILITIES:
import { ProductContext } from '../../context/products.Context';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const RecipesDetailsPage = () => {
  const { recipes } = React.useContext(ProductContext);
  const { id } = useParams();
  return (
    <div>
      <h1>recipesDetailsPage</h1>
      <h1>
        product
        {id}
      </h1>
    </div>
  );
};

export default RecipesDetailsPage;
