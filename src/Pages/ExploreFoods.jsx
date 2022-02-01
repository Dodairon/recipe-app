import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getRandomFood } from '../services/api';
import Footer from '../components/Footer';
import Header from '../components/header';

function ExploreFoods({ history }) {
  return (
    <div>
      <Header display title="Explore Foods" />
      <Link to="/explore/foods/ingredients" data-testid="explore-by-ingredient">
        By Ingredient
      </Link>
      <Link
        to="/explore/foods/nationalities"
        data-testid="explore-by-nationality"
      >
        By Nationality
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => {
          getRandomFood().then((id) => {
            history.push(`/foods/${id}`);
          });
        } }
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
}

export default ExploreFoods;

ExploreFoods.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
