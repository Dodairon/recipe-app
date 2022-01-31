const drinkApi = 'https://www.thecocktaildb.com/api/json/v1/1/';

const foodApi = 'https://www.themealdb.com/api/json/v1/1/';

export const getRandomDrink = async () => {
  const response = await fetch(`${drinkApi}random.php`);
  const res = await response.json();
  return res.drinks[0].idDrink;
};

export const getRandomFood = async () => {
  const res = await (await fetch(`${foodApi}random.php`)).json();
  return res.meals[0].idMeal;
};
