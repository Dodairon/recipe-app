import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import context from '../context/context';
import Header from '../components/header';
import Footer from '../components/Footer';
import API, { getCategoryFood } from '../services/api';
import FilterFoodDrink from '../components/FilterFoodDrink';
import ButtonsDrinkFood from '../components/ButtonsDrinkFood';
import ResultsFilterButtons from '../components/ResultsFilterButtons';

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

function Recipes() {
  const { result, url, filterResult, setResult } = useContext(context);
  const [catFood, setCatFood] = useState({});
  const [resultFood, setResultFood] = useState([]);
  const twelve = 12;
  const nada = '';
  const twelveMeals = result.slice(0, twelve);

  useEffect(() => {
    setResult([]);
    getCategoryFood().then((food) => setCatFood(food));
    API(url.meals[1], nada).then((firstFood) => setResultFood(firstFood.meals));
  }, [url, setResult]);

  return (
    <div>
      <Header display title="Foods" />
      <ButtonsDrinkFood filterButton={ catFood } />
      {
        twelveMeals.map((e, i) => (
          <Card data-testid={ `${i}-recipe-card` } key={ i }>
            <CardTitle data-testid={ `${i}-card-name` }>{ e.strMeal }</CardTitle>
            <CardImage
              data-testid={ `${i}-card-img` }
              src={ e.strMealThumb }
              alt=""
              width="200px"
            />
          </Card>
        ))
      }
      { filterResult.length
        ? <ResultsFilterButtons ResultFilter={ filterResult } />
        : <FilterFoodDrink FoodDrink={ resultFood } />}
      <Footer />
    </div>
  );
}

export default Recipes;
