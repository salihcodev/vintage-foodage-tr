import React from 'react';
import './style.sass';

const RecipeVideoDirections = ({ recipeHint }) => {
  return (
    <section className="directionsVideo">
      <h3 className="recommendedVideo">
        <strong>
          Directions Video <small>Hint</small>
        </strong>
      </h3>
      <div className="videoWrapper">
        <iframe
          src={recipeHint}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default RecipeVideoDirections;
