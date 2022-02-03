const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const url2 = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178319';
const six = 6;

export default async function API() {
  const response = await fetch(url);
  const result = await response.json().catch((err) => err);
  return result.drinks.slice(0, six);
}

export async function API2() {
  const response = await fetch(url2);
  const result = await response.json().catch((err) => err);
  return result.drinks;
}

export async function API3() {
  const response = await fetch(url2);
  const result = await response.json().catch((err) => err);
  const arr = [];
  const twenty = 10;
  result.drinks.forEach((e) => {
    for (let i = 1; i <= twenty; i += 1) {
      const srtIn = e[`strIngredient${i}`];
      const srtMe = e[`strMeasure${i}`];
      if (srtIn && srtMe) arr.push(`${srtIn} - ${srtMe}`);
    }
  });
  return arr;
}
