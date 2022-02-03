import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from '../context/context';
import { filterMealsAPI, filterDrinksAPI } from '../services/api';

function ButtonsDrinkFood(props) {
  const { filterButton } = props;
  const { setfilterResult } = useContext(context);
  const [toggleButton, setToggleButton] = useState('all');
  const five = 5;
  const verifyFilter = filterButton.meals ? filterButton.meals : filterButton.drinks;

  useEffect(() => {
    console.log(filterButton.meals);
    if (toggleButton !== 'all') {
      if (filterButton.meals) {
        filterMealsAPI(toggleButton)
          .then((firstFood) => setfilterResult(firstFood));
      } else {
        filterDrinksAPI(toggleButton)
          .then((firstFood) => setfilterResult(firstFood));
      }
    } else {
      setfilterResult();
    }
  }, [toggleButton]);

  function clickToggle({ strCategory }) {
    if (toggleButton === strCategory) {
      setToggleButton('all');
    } else {
      setToggleButton(strCategory);
    }
  }

  function clickAll() {
    setToggleButton('all');
  }

  return (
    <div>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => clickAll() }
      >
        All
      </button>
      { verifyFilter ? verifyFilter.slice(0, five).map((value, index) => (
        <button
          data-testid={ `${value.strCategory}-category-filter` }
          onClick={ () => clickToggle(value) }
          type="button"
          key={ index }
        >
          { value.strCategory }
        </button>
      )) : null }

    </div>
  );
}

ButtonsDrinkFood.propTypes = {
  filterButton: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape)).isRequired,
};

export default ButtonsDrinkFood;
