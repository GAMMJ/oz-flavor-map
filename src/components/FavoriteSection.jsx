import RestaurantCard from './RestaurantCard';

const FavoriteSection = ({ favorites }) => {
  if (favorites.length === 0) return null;

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-center text-base font-medium text-gray-700">
        찜한 맛집
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {favorites.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default FavoriteSection;
