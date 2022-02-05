import React, { useContext } from 'react';
import styled from 'styled-components';
import DetailsDrink from '../components/drinkDetail';
import context from '../context/context';

const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #227422;
  color: #fff;
  font-size: 1.5rem;
  padding: 2px;
  height: 50px;
`;

function DrinkDetail() {
  const { result } = useContext(context);

  return (
    <div>
      <Header>Drink Detail</Header>
      {
        result.map((e, i) => (
          <div data-testid={ `${i}-recipe-card` } key={ i }>
            <p data-testid={ `${i}-card-name` }>{e.strDrink}</p>
            <img
              data-testid={ `${i}-card-img` }
              src={ e.strDrinkThumb }
              alt=""
              width="300px"
            />
          </div>
        ))
      }
      <DetailsDrink />
    </div>
  );
}

export default DrinkDetail;
