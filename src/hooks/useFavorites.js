import { useState } from 'react';
import { addFavorite } from '../api/favorites';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const handleAddFavorite = async (place) => {
    const alreadyFavorited = favorites.some((f) => f.id === place.id);
    if (alreadyFavorited) return;

    await addFavorite(place);
    setFavorites((prev) => [...prev, place]);
  };

  return { favorites, handleAddFavorite };
};

export default useFavorites;
