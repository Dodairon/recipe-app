const drinkApi = 'https://www.thecocktaildb.com/api/json/v1/1/';

const foodApi = 'https://www.themealdb.com/api/json/v1/1/';

const catFoodApi = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

const catDrinkApi = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

export const getRandomDrink = async () => {
  const response = await fetch(`${drinkApi}random.php`);
  const res = await response.json();
  return res.drinks[0].idDrink;
};

export const getRandomFood = async () => {
  const res = await (await fetch(`${foodApi}random.php`)).json();
  return res.meals[0].idMeal;
};

export const getCategoryFood = async () => {
  const res = await (await fetch(catFoodApi)).json();
  return res;
};

export const getCategoryDrink = async () => {
  const res = await (await fetch(catDrinkApi)).json();
  return res;
};

export const filterMealsAPI = async (meals) => {
  const res = await (await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meals}`)).json();
  return res.meals;
};

export const filterDrinksAPI = async (drinks) => {
  const res = await (await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinks}`)).json();
  return res.drinks;
};

export default async function API(url, ingredient) {
  const response = await fetch(`${url}${ingredient}`);
  const result = await response.json().catch((err) => err);
  return result;
}
