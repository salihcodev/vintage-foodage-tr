import React from 'react';

const LoginPage = () => {
  // reset window title:
  React.useEffect(() => {
    document.title = `Foodage | Login`;
  });
  return (
    <div>
      <h1>LoginPage</h1>
    </div>
  );
};

export default LoginPage;
