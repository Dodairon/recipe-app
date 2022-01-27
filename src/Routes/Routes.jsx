import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login';
import Recipes from '../Pages/Recipes';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Recipes } />

        {/* <Route exact path="/drinks" component={ } />
        <Route exact path={ `/foods/${iddareceit}` } component={ } />
        <Route exact path={ `/drinks/${iddareceita}` } component={ } />
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
