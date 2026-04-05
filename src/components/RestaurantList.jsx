import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants, loading, error, locationError }) => {
  if (error) {
    return (
      <div className="rounded-2xl bg-red-100 px-6 py-4 text-red-700">
        {error}
      </div>
    );
  }

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-center text-base font-medium text-gray-700">
        맛집 목록
      </h2>
      {locationError && (
        <p className="mb-4 text-center text-sm text-red-400">{locationError}</p>
      )}
      {loading ? (
        <p className="py-10 text-center text-sm text-gray-400">
          맛집을 불러오는 중입니다...
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </section>
  );
};

export default RestaurantList;
