import { useEffect, useState } from 'react';
import { getRestaurants } from './api/restaurants';
import FavoriteSection from './components/FavoriteSection';
import RestaurantList from './components/RestaurantList';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getRestaurants().then(setRestaurants);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <FavoriteSection favorites={favorites} />
        <RestaurantList restaurants={restaurants} />
      </div>
    </div>
  );
};

export default App;
