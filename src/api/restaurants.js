import { BASE_URL } from './config';

export const getRestaurants = async () => {
  const response = await fetch(`${BASE_URL}/places`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('요청하신 데이터를 찾을 수 없습니다. (404)');
    }
    throw new Error('에러가 발생했습니다!');
  }

  const data = await response.json();
  return data.places;
};
