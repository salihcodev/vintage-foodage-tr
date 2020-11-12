// ==> BASIC:
import React from 'react';
import './style.sass';

// ==> UTILITIES:
import { ProductContext } from '../../context/recipes.context';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();
const testCards = [
  <div className="testiSlid" onDragStart={handleDragStart}>
    <q>This is a client opinion who ordered this recipe before</q>
  </div>,
  <div className="testiSlid" onDragStart={handleDragStart}>
    <q>This is a client opinion who ordered this recipe before</q>
  </div>,
  <div className="testiSlid" onDragStart={handleDragStart}>
    <q>This is a client opinion who ordered this recipe before</q>
  </div>,
  <div className="testiSlid" onDragStart={handleDragStart}>
    <q>This is a client opinion who ordered this recipe before</q>
  </div>,
  <div className="testiSlid" onDragStart={handleDragStart}>
    <q>This is a client opinion who ordered this recipe before</q>
  </div>,
];

const RecipesDetailsPage = () => {
  const { getLocalRecipe, addRecipeToCart, goToTop } = React.useContext(
    ProductContext,
  );
  const {
    recipeName,
    deliveryTime,
    popular,
    id,
    price,
    recipeDetails,
    ingredients: { ingredients },
    recipeImgs,
  } = getLocalRecipe();

  // get first image and title of recipe.
  const coverImg = recipeImgs[0].url;
    // reset window title:
    React.useEffect(() => {
      document.title = `Foodage | ${recipeName}`;
    });
  return (
    <div className="singleRecipeWrapper">
      <Container fluid>
        <Row>
          <Col lg={4} xs={12}>
            <aside className="lightInfo">
              <span className="price">${price}</span>
              {popular && (
                <span className="popular">The recipe is soo popular</span>
              )}
              <p className="deliveryTime">
                this order will take 5min to be done and {deliveryTime}min to
                reach you :)
              </p>
              <div className="rating">
                <p className="ratingPerc">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </p>
                <div className="testimonialsWrapper">
                  <h6>our clients about this recipe</h6>
                  <div className="testimonials">
                    <AliceCarousel
                      mouseTracking
                      autoPlay
                      autoPlayControls={false}
                      autoPlayStrategy="none"
                      autoPlayInterval={5000}
                      animationDuration={500}
                      animationType="slide"
                      infinite
                      touchTracking
                      disableDotsControls
                      disableButtonsControls
                      items={testCards}
                    />
                  </div>
                </div>
              </div>
              <Link
                to="/cart-contents"
                className="addToCart"
                onClick={() => {
                  addRecipeToCart(id)
                  goToTop()
                }}
              >
                add recipe to cart
              </Link>
            </aside>
          </Col>
          <Col lg={8} xs={12}>
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
                    <img src={url} alt="recipe" />
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
                    <p className="flags">
                      <span className="title">Title</span>
                      <span className="quantity">Quantity</span>
                    </p>
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
