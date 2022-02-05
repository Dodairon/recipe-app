import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import context from '../context/context';
import { filterMealsAPI, filterDrinksAPI } from '../services/api';

const Button = styled.button`
  background-color: #227422;
  border: none;
  margin: 3px;
  border-radius: 3px;
  color: #fff;
  padding: 1px 5px;
`;

function ButtonsDrinkFood(props) {
  const { filterButton } = props;
  const { setfilterResult } = useContext(context);
  const [toggleButton, setToggleButton] = useState('all');
  const five = 5;
  const verifyFilter = filterButton.meals ? filterButton.meals : filterButton.drinks;

  useEffect(() => {
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
  }, [toggleButton, setfilterResult, filterButton]);

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
      <Button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => clickAll() }
      >
        All
      </Button>
      { verifyFilter ? verifyFilter.slice(0, five).map((value, index) => (
        <Button
          data-testid={ `${value.strCategory}-category-filter` }
          onClick={ () => clickToggle(value) }
          type="button"
          key={ index }
        >
          { value.strCategory }
        </Button>
      )) : null }

    </div>
  );
}

ButtonsDrinkFood.propTypes = {
  filterButton: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape)).isRequired,
};

export default ButtonsDrinkFood;
