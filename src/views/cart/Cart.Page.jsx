import React from 'react';
import './style.sass';

import { ProductContext } from '../../context/recipes.context';
import CartItem from '../../components/cart/cart-item/CartItem.Component';
import CartInfoCard from '../../components/cart/cart-info/cart-info.comp';
import EmptyCart from '../../components/cart/emptyCart/empty-cart.comp';
import { AiOutlineClear } from 'react-icons/ai';

const CartPage = () => {
  const { cartList, wipeCart } = React.useContext(ProductContext);

  // reset window title:
  React.useEffect(() => {
    document.title = `Foodage | Cart`;
  });
  return (
    <div className="container">
      <div className="cartPageWrapper">
        <div className="row">
          <div className="col-lg-8 col-xs-12">
            {cartList.length > 0 ? (
              <>
                {/* wipe cart button */}
                <button className="wipeCart" onClick={wipeCart}>
                  <span className="icon">
                    <AiOutlineClear />
                  </span>
                  <span className="text">Wipe Cart</span>
                </button>
                <section className="cartItemsList">
                  <ul>
                    {cartList.map((item) => (
                      <CartItem key={item.id} cartItem={item} />
                    ))}
                  </ul>
                </section>
              </>
            ) : (
              <EmptyCart />
            )}
          </div>
          <div className="col-lg-4 col-xs-12">
            <CartInfoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
