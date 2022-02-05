import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import urlContext from './context';

export default function Provider({ children }) {
  const [result, setResult] = useState([]);
  const [filterResult, setfilterResult] = useState();
  const [favoriteRecipes, setFavoriteRecipes] = React.useState([]);
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

  useEffect(() => {
    setFavoriteRecipes(
      JSON.parse(localStorage.getItem('favoriteRecipes')) || [],
    );
  }, []);

  return (
    <urlContext.Provider
      value={ {
        url,
        setUrl,
        result,
        setResult,
        filterResult,
        setfilterResult,
        favoriteRecipes,
        setFavoriteRecipes,
      } }
    >
      { children }
    </urlContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
