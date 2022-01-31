import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../services/API';
import context from '../context/context';

const msg1 = 'Your search must have only 1 (one) character';
const msg2 = 'Sorry, we haven\'t found any recipes for these filters.';

function SearchBar() {
  const { url, setResult, drinkScreen } = useContext(context);
  const [ingredient, setIngredient] = useState('');
  const history = useHistory();

  const caseMeal = (meals) => {
    if (meals.length > 1) history.push('/foods');
    if (meals.length === 1) history.push(`/foods/${meals[0].idMeal}`);
    setResult(meals);
  };

  const caseDrink = (drinks) => {
    if (drinks.length > 1) history.push('/drinks');
    if (drinks.length === 1) history.push(`/drinks/${drinks[0].idDrink}`);
    setResult(drinks);
  };

  const msgMeals = (meals) => {
    if (meals === null || meals === undefined) global.alert(msg2);
    else caseMeal(meals);
  };

  const msgDrink = (drinks) => {
    if (drinks === null || drinks === undefined) global.alert(msg2);
    else caseDrink(drinks);
  };

  const btnSearch = () => {
    const radios = document.getElementsByName('ipt');

    radios.forEach((e, i) => {
      const checkA = e.checked && e.id === url.searchFor[2];
      const checkB = e.checked && e.id === url.searchFor[i];

      if (checkA && ingredient.length > 1) global.alert(msg1);
      else
      if (checkB && !drinkScreen) {
        API(url.meals[i], ingredient).then((r) => msgMeals(r.meals));
      }
      if (checkB && drinkScreen) {
        API(url.drinks[i], ingredient).then((r) => msgDrink(r.drinks));
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        onChange={ ({ target: { value } }) => setIngredient(value) }
      />
      <label htmlFor="ingredient">
        <input
          id="ingredient"
          name="ipt"
          type="radio"
          data-testid="ingredient-search-radio"
        />
        Ingredient
      </label>
      <label htmlFor="name">
        <input
          id="name"
          name="ipt"
          type="radio"
          data-testid="name-search-radio"
        />
        Name
      </label>
      <label htmlFor="first-letter">
        <input
          id="first-letter"
          name="ipt"
          type="radio"
          data-testid="first-letter-search-radio"
        />
        First letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ btnSearch }
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
