export async function getCategories() {
  const urlCategories = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(urlCategories);
  const result = await response.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const urlCategAndQuery = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  const response = await fetch(urlCategAndQuery);
  const result = await response.json();
  return result;
}

// Requisito 1: Renan e Eduardo;

export async function getProductsFromQuery(query) {
  const queryURL = ` https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(queryURL);
  const result = await response.json();
  return result;
}

export async function getProductsFromCategoryId(categoryId) {
  const categoryIdURL = ` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const response = await fetch(categoryIdURL);
  const result = await response.json();
  return result;
}
