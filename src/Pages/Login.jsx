import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/loginForm';
import rockGlass from '../images/rockGlass.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #227422;
  color: #fff;
  height: 100vh;
  width: 100vw;
`;

function Login() {
  return (
    <Container>
      <span className="logo">TRYBE GOSTOSO</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
      <LoginForm />
    </Container>
  );
}

export default Login;
