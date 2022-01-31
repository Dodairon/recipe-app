import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login';
import Foods from '../Pages/Foods';
import Drinks from '../Pages/Drinks';
import FoodDetail from '../Pages/FoodDetail';
import DrinkDetail from '../Pages/DrinkDetail';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/foods/:id" component={ FoodDetail } />
        <Route exact path="/drinks/:id" component={ DrinkDetail } />
        {/*
        <Route exact path={ `/food/${iddareceita}/in-progress` } component={ } />
        <Route exact path={ `/drink/${iddareceita}/in-progress` } component={ } />
        <Route exact path="/explore" component={ } />
        <Route exact path="/explore/foods" component={ } />
        <Route exact path="/explore/drinks" component={ } />
        <Route exact path="/explore/foods/ingredients" component={ } />
        <Route exact path="/explore/drinks/ingredients" component={ } />
        <Route exact path="/explore/foods/nationalities" component={ } />
        <Route exact path="/profile" component={ } />
        <Route exact path="/done-recipes" component={ } />
        <Route exact path="/favorite-recipes" component={ } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
