import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login';
import FoodDetail from '../Pages/FoodDetail';
import DrinkDetail from '../Pages/DrinkDetail';
import Recipes from '../Pages/Recipes';
import Drinks from '../Pages/Drinks';
import Explore from '../Pages/Explore';
import ExploreDrinks from '../Pages/ExploreDrinks';
import ExploreFoods from '../Pages/ExploreFoods';
import ExploreFoodsIngredients from '../Pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from '../Pages/ExploreDrinksIngredients';
import ExploreFoodsNationalities from '../Pages/ExploreFoodsNationalities';
import Profile from '../Pages/Profile';
import DoneRecipes from '../Pages/DoneRecipes';
import FavoriteRecipes from '../Pages/FavoriteRecipes';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods/:id" component={ FoodDetail } />
        <Route exact path="/drinks/:id" component={ DrinkDetail } />
        <Route exact path="/foods" component={ Recipes } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreFoodsIngredients }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreDrinksIngredients }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreFoodsNationalities }
        />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        {/* <Route exact path={ `/foods/${iddareceit}` } component={ } />
        <Route exact path={ `/drinks/${iddareceita}` } component={ } />
        <Route exact path={ `/food/${iddareceita}/in-progress` } component={ } />
        <Route exact path={ `/drink/${iddareceita}/in-progress` } component={ } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
