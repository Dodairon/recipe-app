import React, { useContext } from 'react';
import context from '../context/context';
import Footer from '../components/Footer';
import Header from '../components/header';

function Drinks() {
  const { result, setDisplay, setDrinkScreen } = useContext(context);
  setDisplay(true);
  setDrinkScreen(true);
  const twelve = 12;
  const twelveDrinks = result.slice(0, twelve);

  return (
    <div>
      <Header display title="Drinks" />
      <h1>Drinks</h1>
      {
        twelveDrinks.map((e, i) => (
          <div data-testid={ `${i}-recipe-card` } key={ i }>
            <p data-testid={ `${i}-card-name` }>{e.strDrink}</p>
            <img
              data-testid={ `${i}-card-img` }
              src={ e.strDrinkThumb }
              alt=""
              width="200px"
            />
          </div>
        ))
      }
      <Footer />
    </div>
  );
}

export default Drinks;
