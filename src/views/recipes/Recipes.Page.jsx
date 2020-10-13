// ==> BASIC:
import React from 'react';
import './style.sass';
// ==> UTILITIES:
import { ProductContext } from '../../context/products.Context';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// ==> COMPONENTS:

// ==> VIEWER:
const ProductsPage = () => {
  const { recipes } = React.useContext(ProductContext);
  return (
    <div className="recipesPage">
      {/* recipes header */}
      <Container>
        <section className="recipesPageHeader">
          <h2>our full menu</h2>
        </section>
      </Container>
      <Container fluid>
        <div className="recipesPageWrapper">
          <Row>
            <Col lg={2} md={3} xs={12}>
              <aside className="recipesFilter">filter</aside>
            </Col>
            <Col lg={10} md={9} xs={12}>
              <section className="recipesContainer">
                {recipes.map((recInfo) => {
                  const { id, recipeName, slug, price, recipeImgs } = recInfo;
                  // get first image and title of recipe.
                  const coverImg = recipeImgs[0].url;
                  const coverImgTitle = recipeImgs[0].title;

                  // set the style to card component
                  const recipeCardImgStyle = {
                    background: `linear-gradient(45deg, #80c29d44, #0007), url(${coverImg}) center/cover`,
                  };
                  return (
                    <div
                      key={id}
                      className="recipeCard"
                      style={recipeCardImgStyle}
                      title={coverImgTitle}
                    >
                      <div className="cardContent">
                        <h3 className="recipeName">{recipeName}</h3>
                        <div className="btnsContainer">
                          <button type="button" className="seeFullRecipe">
                            <Link to={`/recipes/${slug}`}>full details</Link>
                          </button>
                          <button type="button" className="putRecipeToCart">
                            <Link to="/cart-contents">add to cart</Link>
                          </button>
                        </div>
                        <span className="recipePrice">${price}</span>
                      </div>
                    </div>
                  );
                })}
              </section>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ProductsPage;
