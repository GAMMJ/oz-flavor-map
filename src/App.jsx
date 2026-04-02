import { useState } from 'react';
import useRestaurants from './hooks/useRestaurants';
import FavoriteSection from './components/FavoriteSection';
import RestaurantList from './components/RestaurantList';

const App = () => {
  const { restaurants, loading, error } = useRestaurants();
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <FavoriteSection favorites={favorites} />
        <RestaurantList restaurants={restaurants} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default App;
