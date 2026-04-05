import useRestaurants from './hooks/useRestaurants';
import useLocation from './hooks/useLocation';
import useFavorites from './hooks/useFavorites';
import { sortPlacesByDistance } from './utils/loc';
import FavoriteSection from './components/FavoriteSection';
import RestaurantList from './components/RestaurantList';
import Modal from './components/Modal';

const App = () => {
  const { restaurants, loading, error } = useRestaurants();
  const { location, locationError } = useLocation();
  const {
    favorites,
    handleAddFavorite,
    handleDeleteClick,
    confirmDelete,
    cancelDelete,
    pendingDeleteId,
  } = useFavorites();

  const sortedRestaurants = location
    ? sortPlacesByDistance(restaurants, location.lat, location.lon)
    : restaurants;

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <FavoriteSection favorites={favorites} onDelete={handleDeleteClick} />
        <RestaurantList
          restaurants={sortedRestaurants}
          loading={loading}
          error={error}
          locationError={locationError}
          onFavorite={handleAddFavorite}
        />
      </div>
      {pendingDeleteId && (
        <Modal
          message="정말 삭제하시겠습니까?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default App;
