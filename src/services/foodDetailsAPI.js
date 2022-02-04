const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='; // busca por recomendações
const url2 = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='; // busca por detalhes

export default async function API() {
  const response = await fetch(url);
  const result = await response.json().catch((err) => err);
  return result.drinks;
}

export async function API2(id) {
  const response = await fetch(`${url2}${id}`);
  const result = await response.json().catch((err) => err);
  return result.meals;
}

export async function API3(id) {
  const response = await fetch(`${url2}${id}`);
  const result = await response.json().catch((err) => err);

  const arr = [];
  const twenty = 10;

  result.meals.forEach((e) => {
    for (let i = 1; i <= twenty; i += 1) {
      const ingredient = e[`strIngredient${i}`];
      const measure = e[`strMeasure${i}`];
      if (ingredient && measure) arr.push(`${ingredient} - ${measure}`);
    }
  });
  return arr;
}
