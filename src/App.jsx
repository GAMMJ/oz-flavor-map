import { useState } from 'react';
import useRestaurants from './hooks/useRestaurants';
import useLocation from './hooks/useLocation';
import { sortPlacesByDistance } from './utils/loc';
import FavoriteSection from './components/FavoriteSection';
import RestaurantList from './components/RestaurantList';

const App = () => {
  const { restaurants, loading, error } = useRestaurants();
  const { location, locationError } = useLocation();
  const [favorites, setFavorites] = useState([]);

  const sortedRestaurants = location
    ? sortPlacesByDistance(restaurants, location.lat, location.lon)
    : restaurants;

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <FavoriteSection favorites={favorites} />
        <RestaurantList
          restaurants={sortedRestaurants}
          loading={loading}
          error={error}
          locationError={locationError}
        />
      </div>
    </div>
  );
};

export default App;
