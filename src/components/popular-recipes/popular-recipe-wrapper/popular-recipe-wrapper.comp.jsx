// eslint-disable-next-line react/prop-types
// ==> BASIC:
import React from 'react';
import './style.sass';

// ==> UTILITIES:
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ProductContext } from '../../../context/recipes.context';

// ==> COMPONENTS:

const PopularRecipesWrapper = () => {
  const responsive = {
    0: { items: 0 },
    568: { items: 3 },
    769: { items: 4 },
    1024: { items: 8 },
  };

  const defaultMouseDragging = (e) => e.preventDefault();

  const { popularRecipes, goToTop } = React.useContext(ProductContext);
  const popularRecipesToView = popularRecipes.map(
    ({ recipeName, slug, recipeImgs }) => {
      const coverImg = recipeImgs[0].url;
      return (
        <div
          onDragStart={defaultMouseDragging}
          className="pupRecipeItem"
          style={{
            background: `linear-gradient(45deg, #0009,#c9777788), url(${coverImg}) center/cover`,
          }}
        >
          <div className="infoCont">
            <h6 className="recipeName">
              <strong>{recipeName}</strong>
            </h6>
            <div className="linkCont">
              <Link to={`/recipes/${slug}`} onClick={goToTop}>
                View
              </Link>
            </div>
          </div>
        </div>
      );
    },
  );
  return (
    <>
      <section className="pupRecipesWrapper">
        <AliceCarousel
          mouseTracking
          // autoPlay
          autoPlayControls={false}
          autoPlayStrategy="none"
          autoPlayInterval={5000}
          animationDuration={500}
          animationType="slide"
          infinite
          touchTracking
          disableDotsControls
          disableButtonsControls
          items={popularRecipesToView}
          responsive={responsive}
        />
      </section>
    </>
  );
};

export default PopularRecipesWrapper;
