export default async function API(url, ingredient) {
  const response = await fetch(`${url}${ingredient}`);
  const result = await response.json().catch((err) => err);
  return result;
}
