import React, { useContext, useEffect, useState } from 'react';
import context from '../context/context';
import Footer from '../components/Footer';
import Header from '../components/header';
import API, { getCategoryDrink } from '../services/api';
import FilterFoodDrink from '../components/FilterFoodDrink';
import ButtonsDrinkFood from '../components/ButtonsDrinkFood';
import ResultsFilterButtons from '../components/ResultsFilterButtons';

function Drinks() {
  const { result, url, filterResult } = useContext(context);
  const [catDrink, setCatDrink] = useState([]);
  const [resultDrink, setResultDrink] = useState([]);
  const twelve = 12;
  const nada = '';
  const twelveDrinks = result.slice(0, twelve);

  useEffect(() => {
    getCategoryDrink().then((Drink) => setCatDrink(Drink));
    API(url.drinks[1], nada).then((firstDrink) => setResultDrink(firstDrink.drinks));
  }, [url]);

  return (
    <div>
      <Header drinkScreen display title="Drinks" />
      <ButtonsDrinkFood filterButton={ catDrink } />
      { filterResult
        ? <ResultsFilterButtons ResultFilter={ filterResult } />
        : <FilterFoodDrink FoodDrink={ resultDrink } />}
      {
        twelveDrinks.map((e, i) => (
          <div data-testid={ `${i}-recipe-card` } key={ i }>
            <p data-testid={ `${i}-card-name` }>{e.strDrink}</p>
            <img
              data-testid={ `${i}-card-img` }
              src={ e.strDrinkThumb }
              alt=""
              width="200px"
            />
          </div>
        ))
      }
      <Footer />
    </div>
  );
}

export default Drinks;
