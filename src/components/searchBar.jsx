import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import API from '../services/searchBarAPI';
import context from '../context/context';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  color: #227422;
  input[type="radio"] {
    margin: 0 5px;
  }
`;

const Input = styled.input`
  background-color: #227422;
  border: none;
  border-radius: 3px;
  color: #fff;
  padding: 1px 5px;
  margin: 3px;
`;

const Button = styled.button`
  background-color: #fff;
  border: solid 2px #227422;
  margin: 3px;
  border-radius: 3px;
  width: 100px;
  color: #227422;
  padding: 1px 5px;
`;

const msg1 = 'Your search must have only 1 (one) character';
const msg2 = 'Sorry, we haven\'t found any recipes for these filters.';

function SearchBar({ drinkScreen }) {
  const { url, setResult } = useContext(context);
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

  const btnSearch = () => {
    const radios = document.getElementsByName('ipt');

    radios.forEach((e, i) => {
      const checkA = e.checked && e.id === url.searchFor[2];
      const checkB = e.checked && e.id === url.searchFor[i];

      if (checkA && ingredient.length > 1) global.alert(msg1);
      else if (checkB && !drinkScreen) {
        API(url.meals[i], ingredient)
          .then((r) => caseMeal(r.meals))
          .catch(() => global.alert(msg2));
      }
      if (checkB && drinkScreen) {
        API(url.drinks[i], ingredient)
          .then((r) => caseDrink(r.drinks))
          .catch(() => global.alert(msg2));
      }
    });
  };

  return (
    <Container>
      <Input
        type="text"
        data-testid="search-input"
        placeholder="Search..."
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
      <Button type="button" data-testid="exec-search-btn" onClick={ btnSearch }>
        Search
      </Button>
    </Container>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  drinkScreen: PropTypes.bool,
};

SearchBar.defaultProps = {
  drinkScreen: false,
};
