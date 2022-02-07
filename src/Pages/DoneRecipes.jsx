import React, { useEffect } from 'react';
import styled from 'styled-components';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/header';

const Button = styled.button`
  background-color: #227422;
  border: none;
  margin: 3px;
  border-radius: 3px;
  color: #fff;
  padding: 1px 5px;
`;

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = React.useState([]);
  const [filter, setFilter] = React.useState('all');

  useEffect(() => {
    setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')) || []);
  }, []);

  return (
    <div>
      <Header title="Done Recipes" />
      <Button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setFilter('all') }
      >
        All
      </Button>
      <Button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setFilter('food') }
      >
        Food
      </Button>
      <Button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setFilter('drink') }
      >
        Drinks
      </Button>
      {doneRecipes
        .filter((recipe) => recipe.type === filter || filter === 'all')
        .map((recipe, i) => (
          <RecipeCard key={ i } index={ i } recipe={ recipe } />
        ))}
    </div>
  );
}

export default DoneRecipes;
