const BASE_URL = 'https://images-api.nasa.gov/search';

export const fetchImages = async (astro, page) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${astro}&page=${page}`);
    const data = await response.json();
    return data.collection.items; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
