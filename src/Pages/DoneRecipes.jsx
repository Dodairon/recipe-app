import React, { useEffect } from 'react';
import DoneRecipesCard from '../components/DoneRecipeCard';
import Header from '../components/header';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = React.useState([]);
  const [filter, setFilter] = React.useState('all');

  useEffect(() => {
    setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
  }, []);

  return (
    <div>
      <Header title="Done Recipes" />
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
      {doneRecipes
        .filter((recipe) => recipe.type === filter || filter === 'all')
        .map((recipe, i) => (
          <DoneRecipesCard key={ i } index={ i } recipe={ recipe } />
        ))}
    </div>
  );
}

export default DoneRecipes;
