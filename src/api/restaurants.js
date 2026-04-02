import { BASE_URL } from './config';

export const getRestaurants = async () => {
  const response = await fetch(`${BASE_URL}/places`);
  const data = await response.json();
  return data.places;
};
