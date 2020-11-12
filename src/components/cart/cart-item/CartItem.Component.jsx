import React from 'react';
import './style.sass';

import { MdAdd, MdRemove } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';

import { ProductContext } from '../../../context/recipes.context';

const CartItem = ({ cartItem }) => {
  const {
    addRecipeToCart,
    decreaseItemFromCart,
    removeRecipeFromCart,
  } = React.useContext(ProductContext);
  const { id, recipeName, price, recipeImgs, userCount } = cartItem;
  // get first image and title of recipe.
  const cartItemCover = recipeImgs[0].url;
  return (
    <li className="cartItem">
      <section className="itemWrapper">
        <div className="itemImg">
          <img src={cartItemCover} alt="" />
        </div>
        <div className="name">
          <h5>{recipeName}</h5>
        </div>
        <div className="controllers">
          <span className="increaseItem" onClick={() => addRecipeToCart(id)}>
            <MdAdd />
          </span>
          <span className="quantity">{userCount}</span>
          <span
            className="decreaseItem"
            onClick={() => decreaseItemFromCart(id)}
          >
            <MdRemove />
          </span>
        </div>
        <div className="price">
          <strong>${price}</strong>
        </div>
        <div className="remove">
          <span className="deleteItem" onClick={() => removeRecipeFromCart(id)}>
            <AiOutlineDelete />
          </span>
        </div>
      </section>
    </li>
  );
};

export default CartItem;
