const BASE_URL = 'http://localhost:3000';

export const getRestaurants = async () => {
  const response = await fetch(`${BASE_URL}/places`);
  const data = await response.json();
  return data.places;
};
