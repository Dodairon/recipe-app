import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ResultsFilterButtons(props) {
  const { ResultFilter } = props;
  const twelve = 12;
  return (
    <div>
      {
        ResultFilter.slice(0, twelve).map((e, i) => {
          const foodOrDrink = e.idMeal ? 'foods' : 'drinks';
          return (
            <Link key={ e } to={ `/${foodOrDrink}/${e.idMeal ? e.idMeal : e.idDrink}` }>
              <div data-testid={ `${i}-recipe-card` } key={ i }>
                <p data-testid={ `${i}-card-name` }>
                  {e.strMeal ? e.strMeal : e.strDrink }
                </p>
                <img
                  data-testid={ `${i}-card-img` }
                  src={ e.strMealThumb ? e.strMealThumb : e.strDrinkThumb }
                  alt=""
                  width="200px"
                />
              </div>
            </Link>
          );
        })
      }
    </div>
  );
}

ResultsFilterButtons.propTypes = {
  ResultFilter: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ResultsFilterButtons;
