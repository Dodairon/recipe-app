import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [disable, setDisable] = useState(true);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    const six = 6;
    setUser({ ...user, [name]: value });

    if (user.email.includes('@')
      && user.email.includes('.com')
      && user.password.length >= six) {
      setDisable(false);
    } else setDisable(true);
  };

  const submitForm = () => {
    localStorage.setItem('user', JSON.stringify({ email: user.email }));
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
  };

  return (
    <form>
      <input
        type="email"
        data-testid="email-input"
        placeholder="Email"
        name="email"
        value={ user.email }
        onChange={ handleChange }
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Senha"
        name="password"
        value={ user.password }
        onChange={ handleChange }
      />
      <Link to="/foods">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ disable }
          onClick={ submitForm }
        >
          Enter
        </button>
      </Link>
    </form>
  );
}

export default LoginForm;
