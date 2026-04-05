import { BASE_URL } from './config';

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
