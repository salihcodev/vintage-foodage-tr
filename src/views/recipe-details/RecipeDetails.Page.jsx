// ==> BASIC:
import React from 'react';
import './style.sass';

// ==> UTILITIES:
import { ProductContext } from '../../context/recipes.context';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const RecipesDetailsPage = () => {
  const { getLocalStorageRecipe } = React.useContext(ProductContext);
  const {
    recipeName,
    deliveryTime,
    popular,
    price,
    recipeDetails,
    ingredients: { ingredients },
    recipeImgs,
  } = getLocalStorageRecipe();
  // get first image and title of recipe.
  const coverImg = recipeImgs[0].url;
  return (
    <div className="singleRecipeWrapper">
      <Container fluid>
        <Row>
          <Col lg={3} sm={4} xs={12}>
            <aside className="lightInfo">
              <span className="price">${price}</span>
              {popular && (
                <span className="popular">this recipe is soo popular</span>
              )}
              <p className="deliveryTime">
                this order will take 5min to be done and {deliveryTime}min to
                reach you :)
              </p>
              <div className="rating">
                <p className="ratingPerc">rating</p>
                <div className="testimonials">testimonials</div>
              </div>
              <Link to="/cart-contents" className="addToCart">
                add recipe to cart
              </Link>
            </aside>
          </Col>
          <Col lg={9} sm={8} xs={12}>
            <div className="descriptiveInfo">
              <div className="recipeMainImg" title={recipeName}>
                <div className="coverContainer">
                  <Row>
                    <Col md={12}>
                      <img src={coverImg} alt={recipeName} />
                    </Col>
                  </Row>
                </div>
              </div>
              <section className="recipeImgs">
                {recipeImgs.map(({ url }) => (
                  <div key={uuid()} className="recipeImg">
                    <img src={url} />
                  </div>
                ))}
              </section>
              <section className="recipeInfo">
                <h2>{recipeName}</h2>
                <p className="dec">{recipeDetails}</p>

                {/* Ingredients */}
                <div className="ingredients">
                  <h4>ingredients</h4>
                  <ul>
                    {ingredients.map(({ title, quantity }) => (
                      <li key={uuid()} className="ing">
                        <p>
                          <span className="title">{title}: </span>
                          <span className="quantity">{quantity}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecipesDetailsPage;
