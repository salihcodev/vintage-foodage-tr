// eslint-disable-next-line react/prop-types
// ==> BASIC:
import React from 'react';
import './style.sass';

// ==> UTILITIES:
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// ==> COMPONENTS:
import Title from '../title/Title.component';

const defaultMouseDragging = (e) => e.preventDefault();
const popRecipesArr = [
  <div onDragStart={defaultMouseDragging} className="popRecipeItem">
    RECIPE NUMBER I
  </div>,
  <div onDragStart={defaultMouseDragging} className="popRecipeItem">
    RECIPE NUMBER II
  </div>,
  <div onDragStart={defaultMouseDragging} className="popRecipeItem">
    RECIPE NUMBER XI
  </div>,
  <div onDragStart={defaultMouseDragging} className="popRecipeItem">
    RECIPE NUMBER XXI
  </div>,
  <div onDragStart={defaultMouseDragging} className="popRecipeItem">
    RECIPE NUMBER VI
  </div>,
];

const responsive = {
  0: { items: 0 },
  568: { items: 3 },
  769: { items: 4 },
  1024: { items: 8 },
};

const PopularRecipes = () => {
  return (
    <>
      <section className="popularRecipesWrapper">
        <Title title={"Popular"} subTitle={"Recipes"} />
        <div className="recipesSlider">
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
            items={popRecipesArr}
            responsive={responsive}
          />
        </div>
      </section>
    </>
  );
};

export default PopularRecipes;
