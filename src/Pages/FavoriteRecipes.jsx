import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import context from '../context/context';
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

function FavoriteRecipes() {
  const [filter, setFilter] = useState('all');
  const { favoriteRecipes } = useContext(context);

  return (
    <div>
      <Header title="Favorite Recipes" />
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
