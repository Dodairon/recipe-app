import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import context from '../context/context';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const FooterStyled = styled.footer`
  width: 100vw;
  background-color: #fafafa;
  position: fixed;
  bottom: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #eaeaea;
  font-size: 0.8rem;
  font-weight: bold;
`;

function Footer() {
  const { setfilterResult } = useContext(context);
  return (
    <FooterStyled data-testid="footer">
      <Link
        onClick={ () => setfilterResult() }
        to="/drinks"
      >
        <img src={ drinkIcon } data-testid="drinks-bottom-btn" alt="Drinks" />
      </Link>
      <Link to="/explore">
        <img src={ exploreIcon } data-testid="explore-bottom-btn" alt="Explore" />
      </Link>
      <Link
        onClick={ () => setfilterResult() }
        to="/foods"
      >
        <img src={ mealIcon } data-testid="food-bottom-btn" alt="Food" />
      </Link>
    </FooterStyled>
  );
}

export default Footer;
