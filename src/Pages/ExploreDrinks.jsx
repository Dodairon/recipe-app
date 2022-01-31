import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/header';
import { getRandomDrink } from '../services/api';

function ExploreDrinks({ history }) {
  return (
    <div>
      <Header display title="Explore Drinks" />
      <Link
        to="/explore/drinks/ingredients"
        data-testid="explore-by-ingredient"
      >
        By Ingredient
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => {
          getRandomDrink().then((id) => {
            history.push(`/drinks/${id}`);
          });
        } }
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;

ExploreDrinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
