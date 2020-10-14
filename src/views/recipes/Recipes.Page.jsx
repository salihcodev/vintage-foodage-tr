// ==> BASIC:
import React from 'react';
import './style.sass';
// ==> UTILITIES:
import { ProductContext } from '../../context/recipes.context';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// ==> COMPONENTS:
import RecipeCard from '../../components/recipe-card/RecipesCard';

// ==> VIEWER:
const RecipesPage = () => {
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
                {recipes.map((recInfo) => (
                  <RecipeCard recInfo={recInfo} />
                ))}
              </section>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default RecipesPage;
