import React from 'react';
import './style.sass';

const LoginPage = () => {
  // reset window title:
  React.useEffect(() => {
    document.title = `Foodage | Login`;
  });
  return (
    <div className="loginViewer">
      <strong>LoginPage will be ready soon!</strong>
    </div>
  );
};

export default LoginPage;
