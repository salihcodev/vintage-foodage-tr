import React from 'react';
import './style.sass'

import LoadingImg from '../../assets/loading.gif';

const Loading = () => {
  return (
    <div className="wrapper">
      <img src={LoadingImg} alt="loading..." />
    </div>
  );
};

export default Loading;
