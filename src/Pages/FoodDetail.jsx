import React, { useContext } from 'react';
import context from '../context/context';
import Footer from '../components/Footer';

function FoodDetail() {
  const { result } = useContext(context);

  return (
    <div>
      Food Detail
      {
        result.map((e, i) => (
          <div data-testid={ `${i}-recipe-card` } key={ i }>
            <p data-testid={ `${i}-card-name` }>{e.strMeal}</p>
            <img
              data-testid={ `${i}-card-img` }
              src={ e.strMealThumb }
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

export default FoodDetail;
