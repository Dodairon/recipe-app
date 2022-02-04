import React, { useState, useContext } from 'react';
import context from '../context/context';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/header';

function FavoriteRecipes() {
  const [filter, setFilter] = useState('all');
  const { favoriteRecipes } = useContext(context);

  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setFilter('all') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setFilter('food') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setFilter('drink') }
      >
        Drinks
      </button>
      <Header title="Favorite Recipes" />
      {favoriteRecipes
        .filter((recipe) => recipe.type === filter || filter === 'all')
        .map((recipe, i) => (
          <RecipeCard
            key={ i }
            index={ i }
            recipe={ recipe }
            favorite
          />
        ))}
    </div>
  );
}

export default FavoriteRecipes;
