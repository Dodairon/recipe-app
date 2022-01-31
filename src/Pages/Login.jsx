import React from 'react';
import LoginForm from '../components/loginForm';
import rockGlass from '../images/rockGlass.svg';

function Login() {
  return (
    <div>
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
      <LoginForm />
    </div>
  );
}

export default Login;
