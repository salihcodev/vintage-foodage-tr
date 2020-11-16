// ==> BASIC:
import React from 'react';
import './style.sass';
// ==> UTILITIES:
import { ProductContext } from '../../context/recipes.context';
import { Container, Row, Col } from 'react-bootstrap';

// ==> COMPONENTS:
import RecipeCard from '../../components/recipe-card/RecipesCard';
import RecipesFilter from '../../components/recipes-filter/RecipesFilter.comp';
import Loading from '../../components/loading/Loading.comp';

// ==> VIEWER:
const RecipesPage = () => {
  const { recipes, loading } = React.useContext(ProductContext);

  // reset window title:
  React.useEffect(() => {
    document.title = `Foodage | Recipes`;
  });
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
            <Col xl={3} lg={4} md={5} xs={12}>
              <RecipesFilter />
            </Col>
            <Col xl={9} lg={8} md={7} xs={12}>
              {loading ? (
                <Loading />
              ) : (
                <section className="recipesContainer">
                  {recipes.map((recInfo) => (
                    <RecipeCard key={recInfo.id} recInfo={recInfo} />
                  ))}
                </section>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default RecipesPage;
