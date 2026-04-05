import { useEffect, useState } from 'react';
import { getFavorites, addFavorite } from '../api/favorites';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  const handleAddFavorite = async (place) => {
    const alreadyFavorited = favorites.some((f) => f.id === place.id);
    if (alreadyFavorited) return;

    await addFavorite(place);
    setFavorites((prev) => [...prev, place]);
  };

  return { favorites, handleAddFavorite };
};

export default useFavorites;
