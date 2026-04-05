import { useEffect, useState } from 'react';
import { getFavorites, addFavorite, deleteFavorite } from '../api/favorites';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [pendingDeleteId, setPendingDeleteId] = useState(null);

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  const handleAddFavorite = async (place) => {
    const alreadyFavorited = favorites.some((f) => f.id === place.id);
    if (alreadyFavorited) return;

    await addFavorite(place);
    setFavorites((prev) => [...prev, place]);
  };

  const handleDeleteClick = (place) => {
    setPendingDeleteId(place.id);
  };

  const confirmDelete = async () => {
    await deleteFavorite(pendingDeleteId);
    setFavorites((prev) => prev.filter((f) => f.id !== pendingDeleteId));
    setPendingDeleteId(null);
  };

  const cancelDelete = () => {
    setPendingDeleteId(null);
  };

  return {
    favorites,
    handleAddFavorite,
    handleDeleteClick,
    confirmDelete,
    cancelDelete,
    pendingDeleteId,
  };
};

export default useFavorites;
