// ==> BASIC:
import React from 'react';
import './style.sass';

// UTILITIES:
import { ProductContext } from '../../context/recipes.context';
import { Link } from 'react-router-dom';

// ==> COMPONENT:
const FoundRecipe = ({
  fRecipe: { slug, recipeName, recipeImgs, recipeDetails },
}) => {
  const { getClickedRecipe } = React.useContext(ProductContext);

  const recipeCover = recipeImgs[0].url;
  return (
    <Link
      to={`/recipes/${slug}`}
      className="wrapper"
      onClick={() => getClickedRecipe(slug)}
    >
      <li className="foundRecipe">
        <div className="imgCont">
          <img src={recipeCover} alt="" className="recipeCover" />
        </div>
        <div className="recipeInfo">
          <h6 className="recipeName">{recipeName}</h6>
          <small className="recipeDetails">{recipeDetails}</small>
        </div>
      </li>
    </Link>
  );
};

export default FoundRecipe;
