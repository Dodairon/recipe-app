import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import WhiteHearthIcon from '../images/whiteHeartIcon.svg';
import BlackHearthIcon from '../images/blackHeartIcon.svg';
import API, { API2, API3 } from '../services/drinkDetailsAPI';
import '../css/foodDetails.css';

const Content = styled.div`
  padding: 0 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Button = styled.button`
  background-color: #227422;
  border: solid 2px #d4d4d4;
  margin: 0;
  padding: 5px 10px;
  font-weight: bold;
  color: #d4d4d4;
`;

export default function DetailsDrink() {
  const [images, setImages] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [copy, setCopy] = useState(false);
  const [fav, setFav] = useState(false);
  const [recipeInProgress, setRecipeInProgress] = useState(false);
  const [recipeAlreadyMade, setRecipeAlreadyMade] = useState(false);
  const history = useHistory();
  const params = useParams();
  const { id } = params;
  const six = 6;

  const btnStart = () => history.push(`/drinks/${id}/in-progress`);

  const btnShare = () => {
    clipboardCopy(window.location.href);
    setCopy(true);
  };

  const btnFav = () => {
    console.log(recipe);
    if (!fav) setFav(true);
    else setFav(false);
    recipe.forEach((e) => {
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify([
          {
            id: e.idDrink,
            type: 'drink',
            nationality: '',
            category: e.strCategory,
            alcoholicOrNot: e.strAlcoholic,
            name: e.strDrink,
            image: e.strDrinkThumb,
          },
        ]),
      );
    });
  };

  // API
  useEffect(() => {
    API().then((r) => setImages(r));
    API2(id).then((r) => setRecipe(r));
    API3(id).then((r) => setIngredients(r));
  }, [id]);

  // check recipes already made
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    storage.forEach((e) => {
      if (e.id.includes(id)) setRecipeAlreadyMade(true);
      else setRecipeAlreadyMade(false);
    });
  }, [id]);

  // check in progress recipes
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('inProgressRecipes')) || {
      cocktails: [],
    };
    console.log(storage);
    const isInProgress = Object.keys(storage.cocktails).includes(id);
    setRecipeInProgress(isInProgress);
  }, [id]);

  // check favorite recipes
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    console.log(storage);
    storage.forEach((e) => {
      if (e.id === id) setFav(true);
      else setFav(false);
    });
  }, [id]);

  return (
    <div>
      {recipe.map((e, i) => (
        <div data-testid={ `${i}-recipe-card` } key={ i }>
          <Image
            data-testid="recipe-photo"
            src={ e.strDrinkThumb }
            alt=""
            width="300px"
          />
          <Content>
            <h2 data-testid="recipe-title">{e.strDrink}</h2>
            <p data-testid="recipe-category">
              {e.strCategory}
              <br />
              {e.strAlcoholic}
            </p>
            <button
              type="button"
              className="share-btn"
              data-testid="share-btn"
              onClick={ btnShare }
            >
              <img src={ shareIcon } alt="" />
            </button>
            <button type="button" className="favorite-btn" onClick={ btnFav }>
              <img
                data-testid="favorite-btn"
                src={ fav ? BlackHearthIcon : WhiteHearthIcon }
                alt=""
              />
            </button>
            <p>{copy && 'Link copied!'}</p>
            <hr />
            {ingredients.map((x, w) => (
              <ul key={ w }>
                <li data-testid={ `${w}-ingredient-name-and-measure` }>{x}</li>
              </ul>
            ))}
            <hr />
            <p data-testid="instructions">{e.strInstructions}</p>
            <hr />
            <div>
              {images.slice(0, six).map((y, z) => (
                <div
                  style={ { display: z >= 1 ? 'none' : 'block' } }
                  key={ z }
                  data-testid={ `${z}-recomendation-card` }
                >
                  <span data-testid={ `${z}-recomendation-title` }>
                    {y.strMeal}
                  </span>
                  <Image src={ y.strMealThumb } alt="" />
                </div>
              ))}
            </div>
            <hr />
            {!recipeAlreadyMade ? (
              <Button
                type="button"
                className="start-recipe-btn"
                data-testid="start-recipe-btn"
                onClick={ btnStart }
              >
                {recipeInProgress ? 'Continue Recipe' : 'Start Recipe'}
              </Button>
            ) : null}
          </Content>
        </div>
      ))}
    </div>
  );
}
