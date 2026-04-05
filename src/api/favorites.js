import { BASE_URL } from './config';

export const getFavorites = async () => {
  const response = await fetch(`${BASE_URL}/users/places`);

  if (!response.ok) {
    throw new Error('찜한 맛집을 불러오지 못했습니다.');
  }

  const data = await response.json();
  return data.places;
};

export const addFavorite = async (place) => {
  const response = await fetch(`${BASE_URL}/users/places`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ place }),
  });

  if (!response.ok) {
    throw new Error('찜하기에 실패했습니다.');
  }
};
