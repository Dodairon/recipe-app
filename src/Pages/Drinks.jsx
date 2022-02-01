import React, { useContext } from 'react';
import context from '../context/context';
import Footer from '../components/Footer';
import Header from '../components/header';

function Drinks() {
  const { result } = useContext(context);
  const twelve = 12;
  const twelveDrinks = result.slice(0, twelve);

  return (
    <div>
      <Header drinkScreen display title="Drinks" />
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
