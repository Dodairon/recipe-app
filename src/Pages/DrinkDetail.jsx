import React, { useContext } from 'react';
import context from '../context/context';
import Footer from '../components/Footer';

function DrinkDetail() {
  const { result } = useContext(context);

  return (
    <div>
      <h1>Drink Detail</h1>
      {
        result.map((e, i) => (
          <div data-testid={ `${i}-recipe-card` } key={ i }>
            <p data-testid={ `${i}-card-name` }>{e.strDrink}</p>
            <img
              data-testid={ `${i}-card-img` }
              src={ e.strDrinkThumb }
              alt=""
              width="300px"
            />
          </div>
        ))
      }
      <Footer />
    </div>
  );
}

export default DrinkDetail;
