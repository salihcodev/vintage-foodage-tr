/* eslint-disable react/prop-types */
// ==> BASIC:
import React from 'react';
import './style.sass';

// ==> UTILITIES:
import { FaCarrot } from 'react-icons/fa';
import { ProductContext } from '../../context/recipes.context';

// showTop
// ==> COMPONENT:
const ToTopBtn = () => {
  const { goToTop, toTopBtn } = React.useContext(ProductContext);
  return (
    <div className="toToBtnCont">
      <button onClick={goToTop} className={`${toTopBtn ? "showTop" : null}`}>
        <span className="toTopIcon">{FaCarrot()}</span>
      </button>
    </div>
  );
};
export default ToTopBtn;
