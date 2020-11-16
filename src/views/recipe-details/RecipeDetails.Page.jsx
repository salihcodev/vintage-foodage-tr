// ==> BASIC:
import React from 'react';
import './style.sass';

// ==> COMPONENTS:
import RecipeVideoDirections from '../../components/recipe-video-directions/recipe-video-directions.comp';

// ==> UTILITIES:
import { ProductContext } from '../../context/recipes.context';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import ChefHat from '../../assets/chef.svg';
import OpenBook from '../../assets/open-book.svg';
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
    recipeVideo,
    ingredients: { ingredients },
    directions: { directions },
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
                <span className="popular">This recipe is soo popular</span>
              )}
              <p className="deliveryTime">
                Order will take <b>5min</b> to be done and{' '}
                <b>{deliveryTime}min</b> to reach you :)
              </p>
              <div className="rating">
                <p className="ratingPerc">
                  <span>
                    <BsStarFill />
                  </span>
                  <span>
                    <BsStarFill />
                  </span>
                  <span>
                    <BsStarFill />
                  </span>
                  <span>
                    <BsStarFill />
                  </span>
                  <span>
                    <BsStarHalf />
                  </span>
                  <h6 className="rateNum">
                    <strong>4.8/5</strong>
                  </h6>
                </p>
                <div className="testimonialsWrapper">
                  <h6>our clients opinions about this recipe</h6>
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
                  addRecipeToCart(id);
                  goToTop();
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
                <h2>
                  <strong>{recipeName}</strong>
                </h2>
                <p className="dec">{recipeDetails}</p>

                {/* Ingredients */}
                <div className="ingredients">
                  <h4>Ingredients</h4>
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

                {/* Directions */}
                <div className="directions">
                  <h4>Directions</h4>
                  <ul>
                    <span className="bookFlag">
                      <img src={OpenBook} alt="" />
                    </span>
                    {directions.map(({ direction }) => (
                      <li key={uuid()} className="directionWrapper">
                        <div>
                          <span className="icon">
                            <img src={ChefHat} alt="" />
                          </span>
                        </div>
                        <p className="direction">{direction}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* directions video */}
                <RecipeVideoDirections recipeHint={recipeVideo} />
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecipesDetailsPage;
