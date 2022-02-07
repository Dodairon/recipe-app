import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.219);
  margin: 10px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardTitle = styled.h1`
  padding: 10px;
  font-size: 1.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  font-weight: bold;
  color: #000;
`;

function FilterFoodDrink(props) {
  const { FoodDrink } = props;
  const twelve = 12;
  return (
    <div>
      {
        FoodDrink.slice(0, twelve).map((e, i) => {
          const foodOrDrink = e.idMeal ? 'foods' : 'drinks';
          return (
            <Link key={ i } to={ `/${foodOrDrink}/${e.idMeal ? e.idMeal : e.idDrink}` }>
              <Card data-testid={ `${i}-recipe-card` }>
                <CardTitle data-testid={ `${i}-card-name` }>
                  {e.strMeal ? e.strMeal : e.strDrink }
                </CardTitle>
                <CardImage
                  data-testid={ `${i}-card-img` }
                  src={ e.strMealThumb ? e.strMealThumb : e.strDrinkThumb }
                  alt=""
                  width="200px"
                />
              </Card>
            </Link>
          );
        })
      }
    </div>
  );
}

FilterFoodDrink.propTypes = {
  FoodDrink: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default FilterFoodDrink;
