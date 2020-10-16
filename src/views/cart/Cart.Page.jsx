import React from 'react';

const CartPage = () => {
  // reset window title:
  React.useEffect(() => {
    document.title = `Foodage | Cart`;
  });
  return (
    <div>
      <h1>CartPage</h1>
    </div>
  );
};

export default CartPage;
