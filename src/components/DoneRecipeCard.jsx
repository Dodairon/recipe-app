import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
  && > button {
    width: 50px;
    height: 50px;
    background: transparent;
    border: none;
  }
`;

const Image = styled.img`
  width: 100vw;
  height: auto;
`;

function DoneRecipesCard({ recipe, index }) {
  const [isShared, setIsShared] = React.useState(false);

  function handleShareClick() {
    copy(`${window.location.origin}/${recipe.type}s/${recipe.id}`);
    setIsShared(true);
  }

  return (
    <Container>
      <Link to={ `/${recipe.type}s/${recipe.id}` }>
        <Image
          src={ recipe.image }
          alt={ recipe.name }
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <button type="button" onClick={ handleShareClick }>
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="Share"
        />
      </button>
      {isShared && <p>Link copied!</p>}
      <p data-testid={ `${index}-horizontal-top-text` }>
        {recipe.type === 'drink' ? recipe.alcoholicOrNot : recipe.nationality}
        {' '}
        -
        {' '}
        {recipe.category}
      </p>
      <Link to={ `/${recipe.type}s/${recipe.id}` }>
        <h2 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h2>
      </Link>
      <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
      {recipe.tags.map((tag, i) => (
        <span data-testid={ `${index}-${tag}-horizontal-tag` } key={ i }>
          {tag}
        </span>
      ))}
    </Container>
  );
}

export default DoneRecipesCard;

DoneRecipesCard.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
