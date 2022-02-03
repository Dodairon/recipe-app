import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import context from '../context/context';
import Header from '../components/header';
import Footer from '../components/Footer';

function Recipes(props) {
  const { history } = props;
  const { result, setDrinkScreen } = useContext(context);
  setDrinkScreen(false);
  const twelve = 12;
  const twelveMeals = result.slice(0, twelve);

  return (
    <div>
      <Header display title="Foods" history={ history } />
      <h1>Recipes</h1>
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

Recipes.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Recipes;
