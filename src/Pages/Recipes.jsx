import React, { useContext, useEffect, useState } from 'react';
import context from '../context/context';
import Header from '../components/header';
import Footer from '../components/Footer';
import API, { getCategoryFood } from '../services/api';
import FilterFoodDrink from '../components/FilterFoodDrink';
import ButtonsDrinkFood from '../components/ButtonsDrinkFood';
import ResultsFilterButtons from '../components/ResultsFilterButtons';

function Recipes() {
  const { result, url, filterResult } = useContext(context);
  const [catFood, setCatFood] = useState([]);
  const [resultFood, setResultFood] = useState([]);
  const twelve = 12;
  const nada = '';
  const twelveMeals = result.slice(0, twelve);

  useEffect(() => {
    getCategoryFood().then((food) => setCatFood(food));
    API(url.meals[1], nada).then((firstFood) => setResultFood(firstFood.meals));
  }, [url]);

  return (
    <div>
      <Header display title="Foods" />
      <ButtonsDrinkFood filterButton={ catFood } />
      { filterResult
        ? <ResultsFilterButtons ResultFilter={ filterResult } />
        : <FilterFoodDrink FoodDrink={ resultFood } />}
      {
        twelveMeals.map((e, i) => (
          <div data-testid={ `${i}-recipe-card` } key={ i }>
            <img
              data-testid={ `${i}-card-img` }
              src={ e.strMealThumb }
              alt=""
              width="200px"
            />
            <p data-testid={ `${i}-card-name` }>{ e.strMeal }</p>
          </div>
        ))
      }
      <Footer />
    </div>
  );
}

export default Recipes;
