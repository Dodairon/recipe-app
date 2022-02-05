import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import context from '../context/context';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 3px;
  color: #227422;
  padding: 5px 10px;
  &&:disabled {
    border: #585858 2px solid;
    cursor: not-allowed;
    background-color: #7a7a7a;
    color: #a7a7a7;
  }
`;

const Input = styled.input`
  background-color: #fff;
  border-radius: 3px;
  border: none;
  margin: 5px 0;
  padding: 5px 10px;
  color: #3d3d3d;
`;

function LoginForm() {
  const { setfilterResult } = useContext(context);
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
    setfilterResult();
  };

  return (
    <Form>
      <Input
        type="email"
        data-testid="email-input"
        placeholder="Email"
        name="email"
        value={ user.email }
        onChange={ handleChange }
      />
      <Input
        type="password"
        data-testid="password-input"
        placeholder="Senha"
        name="password"
        value={ user.password }
        onChange={ handleChange }
      />
      <Link to="/foods">
        <Button
          type="button"
          data-testid="login-submit-btn"
          disabled={ disable }
          onClick={ submitForm }
        >
          Enter
        </Button>
      </Link>
    </Form>
  );
}

export default LoginForm;
