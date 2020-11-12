// ==> BASIC:
import React from 'react';
import './style.sass';
// ==> UTILITIES:
import { ProductContext } from '../../context/recipes.context';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

// ==> VIEWER:
const RecipeCard = ({ recInfo }) => {
  const { getClickedRecipe, addRecipeToCart } = React.useContext(
    ProductContext,
  );
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
        <div className="textCont">
          <div className="flexShield">
            <h3 className="recipeName">{recipeName}</h3>
            <Link
              className="seeFullRecipe"
              to={`/recipes/${slug}`}
              onClick={() => getClickedRecipe(slug)}
            >
              details
            </Link>
          </div>
        </div>
        <nav className="recipeFooter">
          <Link
            className="putRecipeToCart"
            to="/recipes"
            onClick={() => addRecipeToCart(id)}
          >
            <strong>
              <FiShoppingCart />
            </strong>
          </Link>
          <strong className="recipePrice">${price}</strong>
        </nav>
      </div>
    </div>
  );
};

export default RecipeCard;
