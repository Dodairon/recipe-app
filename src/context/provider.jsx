import React, { useState } from 'react';
import PropTypes from 'prop-types';
import urlContext from './context';

export default function Provider({ children }) {
  const [result, setResult] = useState([]);
  const [drinkScreen, setDrinkScreen] = useState(false);
  const [url, setUrl] = useState({
    searchFor: ['ingredient', 'name', 'first-letter'],
    meals: [
      'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
      'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      'https://www.themealdb.com/api/json/v1/1/search.php?f=',
    ],
    drinks: [
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
    ],
  });

  return (
    <urlContext.Provider
      value={ {
        url,
        setUrl,
        result,
        setResult,
        drinkScreen,
        setDrinkScreen,
      } }
    >
      { children }
    </urlContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
