const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const url2 = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771';
const six = 6;

export default async function API() {
  const response = await fetch(url);
  const result = await response.json().catch((err) => err);
  return result.meals.slice(0, six);
}

export async function API2() {
  const response = await fetch(url2);
  const result = await response.json().catch((err) => err);
  return result.meals;
}

export async function API3() {
  const response = await fetch(url2);
  const result = await response.json().catch((err) => err);
  const arr = [];
  const twenty = 10;
  result.meals.forEach((e) => {
    for (let i = 1; i <= twenty; i += 1) {
      const srtIn = e[`strIngredient${i}`];
      const srtMe = e[`strMeasure${i}`];
      if (srtIn && srtMe) arr.push(`${srtIn} - ${srtMe}`);
    }
  });
  return arr;
}
