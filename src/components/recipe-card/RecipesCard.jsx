// ==> BASIC:
import React from 'react';
import './style.sass';
// ==> UTILITIES:
import { ProductContext } from '../../context/recipes.context';
import { Link } from 'react-router-dom';

// ==> VIEWER:
const RecipeCard = ({ recInfo }) => {
  const { getClickedRecipe } = React.useContext(ProductContext);
  const { id, recipeName, slug, price, recipeImgs } = recInfo;
  // get first image and title of recipe.
  const coverImg = recipeImgs[0].url;

  // set the style to card component
  const recipeCardImgStyle = {
    background: `linear-gradient(45deg, #80c29d44, #0007), url(${coverImg}) center/cover`,
  };
  return (
    <div
      key={id}
      className="recipeCard"
      style={recipeCardImgStyle}
      title={recipeName}
    >
      <div className="cardContent">
        <h3 className="recipeName">{recipeName}</h3>
        <div className="btnsContainer">
          <Link
            className="seeFullRecipe"
            to={`/recipes/${slug}`}
            onClick={() => getClickedRecipe(slug)}
          >
            full details
          </Link>
          <Link className="putRecipeToCart" to="/cart-contents">
            add to cart
          </Link>
        </div>
        <span className="recipePrice">${price}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
