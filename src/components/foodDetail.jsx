import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import WhiteHearthIcon from '../images/whiteHeartIcon.svg';
import BlackHearthIcon from '../images/blackHeartIcon.svg';
import API, { API2, API3 } from '../services/foodDetailsAPI';
import '../css/foodDetails.css';

export default function DetailsFood() {
  const [images, setImages] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [copy, setCopy] = useState(false);
  const [fav, setFav] = useState(false);
  const [recipeAlreadyMade, setRecipeAlreadyMade] = useState(false);
  const [recipeInProgress, setRecipeInProgress] = useState(false);
  const history = useHistory();
  const id = 52771;

  const btnStart = () => {
    history.push(`/food/${id}/in-progress`);
  };

  const btnShare = () => {
    clipboardCopy(window.location.href);
    setCopy(true);
  };

  const btnFav = () => {
    if (!fav) setFav(true);
    else setFav(false);
    recipe.forEach((e) => {
      localStorage.setItem('favoriteRecipes', JSON.stringify(
        [{
          id: e.idMeal,
          type: 'comida',
          nationality: e.strArea,
          category: e.strCategory,
          alcoholicOrNot: '',
          name: e.strMeal,
          image: e.strMealThumb,
        }],
      ));
    });
  };

  // API
  useEffect(() => {
    API().then((r) => setImages(r));
    API2().then((r) => setRecipe(r));
    API3().then((r) => setIngredients(r));
  }, []);

  // check recipes already made
  useEffect(() => {
    JSON.parse(localStorage.getItem('doneRecipes'))
      .forEach((e) => {
        if (e.id.includes(id)) setRecipeAlreadyMade(false);
        else setRecipeAlreadyMade(false);
      });
  }, []);

  // check recipes in progress
  useEffect(() => {
    JSON.parse(localStorage.getItem('inProgressRecipes'))
      .forEach((e) => {
        if (e.id.includes(id)) setRecipeInProgress(true);
        else setRecipeInProgress(false);
      });
  }, []);

  // check favorite recipes
  useEffect(() => {
    JSON.parse(localStorage.getItem('favoriteRecipes'))
      .forEach((e) => {
        if (e.id.includes(id)) setFav(true);
        else setFav(false);
      });
  }, []);

  return (
    <div>
      {
        recipe.map((e, i) => (
          <div data-testid={ `${i}-recipe-card` } key={ i }>
            <img
              data-testid="recipe-photo"
              src={ e.strMealThumb }
              alt=""
              width="300px"
            />
            <h2 data-testid="recipe-title">{ e.strMeal }</h2>
            <p data-testid="recipe-category">{ e.strCategory }</p>
            <button
              type="button"
              className="share-btn"
              data-testid="share-btn"
              onClick={ btnShare }
            >
              <img src={ shareIcon } alt="" />
            </button>
            <button
              type="button"
              className="favorite-btn"
              data-testid="favorite-btn"
              onClick={ btnFav }
            >
              <img src={ fav ? BlackHearthIcon : WhiteHearthIcon } alt="" />
            </button>
            <p>{copy && 'Link copied!'}</p>
            <hr />
            {
              ingredients.map((x, w) => (
                <ul key={ w }>
                  <li
                    data-testid={ `${w}-ingredient-name-and-measure` }
                  >
                    { x }
                  </li>
                </ul>
              ))
            }
            <hr />
            <p data-testid="instructions">{ e.strInstructions }</p>
            <hr />
            <video data-testid="video" controls>
              <source src={ e.strYoutube } type="video/mp4" />
              <track default kind="captions" />
            </video>
            <hr />
            <div
              data-testid={ `${i}-recomendation-card` }
              className="items"
            >
              {
                images.map((y, z) => (
                  <div key={ z } className="item">
                    <img src={ y.strMealThumb } alt="" />
                  </div>
                ))
              }
            </div>
            <hr />
            {
              !recipeAlreadyMade
                ? (
                  <button
                    type="button"
                    className="start-recipe-btn"
                    data-testid="start-recipe-btn"
                    onClick={ btnStart }
                  >
                    { recipeInProgress ? 'Continue Recipe' : 'Start Recipe' }
                  </button>)
                : null
            }
          </div>
        ))
      }
    </div>
  );
}
