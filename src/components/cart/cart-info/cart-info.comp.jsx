import React from 'react';
import './style.sass'

import { ProductContext } from '../../../context/recipes.context';

const CartInfoCard = () => {
  const {
    cartList,
    totalCartItemsPrice,
    subtotalCartItemsPrice,
    totalTax,
  } = React.useContext(ProductContext);

  return (
    <aside className="cartInfo">
      <div className="cartInfoWrapper">
        <div className="cartHistoryHeader">
          <h3 className="cartHistory">
            <strong>cart history</strong>
          </h3>
        </div>
        <div className="cartHistoryBody">
          <h5 className="subtotal">
            <strong>Subtotal: ${subtotalCartItemsPrice}</strong>
          </h5>
          <h5 className="total">
            <strong>Total: ${totalCartItemsPrice}</strong>
          </h5>
          <h6 className="totalTax">
            <strong>Total Tax: ${totalTax}</strong>
          </h6>
          <button
            className="checkoutBtn"
            style={{
              cursor: `${cartList >= 0 ? `not-allowed` : `pointer`}`,
              opacity: `${cartList >= 0 ? 0.7 : 1}`,
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CartInfoCard;
