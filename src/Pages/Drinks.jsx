import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import context from '../context/context';
import Footer from '../components/Footer';
import Header from '../components/header';
import API, { getCategoryDrink } from '../services/api';
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

function Drinks() {
  const { result, url, filterResult, setResult } = useContext(context);
  const [catDrink, setCatDrink] = useState({});
  const [resultDrink, setResultDrink] = useState([]);
  const twelve = 12;
  const nada = '';
  const twelveDrinks = result.slice(0, twelve);

  useEffect(() => {
    setResult([]);
    getCategoryDrink().then((Drink) => setCatDrink(Drink));
    API(url.drinks[1], nada).then((firstDrink) => setResultDrink(firstDrink.drinks));
  }, [url, setResult]);

  return (
    <div>
      <Header drinkScreen display title="Drinks" />
      <ButtonsDrinkFood filterButton={ catDrink } />
      {
        twelveDrinks.map((e, i) => (
          <Card data-testid={ `${i}-recipe-card` } key={ i }>
            <CardTitle data-testid={ `${i}-card-name` }>{e.strDrink}</CardTitle>
            <CardImage
              data-testid={ `${i}-card-img` }
              src={ e.strDrinkThumb }
              alt=""
              width="200px"
            />
          </Card>
        ))
      }
      { filterResult.length
        ? <ResultsFilterButtons ResultFilter={ filterResult } />
        : <FilterFoodDrink FoodDrink={ resultDrink } />}
      <Footer />
    </div>
  );
}

export default Drinks;
