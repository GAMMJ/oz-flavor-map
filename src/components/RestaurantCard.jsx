const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-200">
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-0.5 px-1">
        <span className="truncate text-sm font-semibold text-gray-900">
          {restaurant.name}
        </span>
        <span className="text-xs text-gray-500">{restaurant.category}</span>
        <span className="text-xs text-yellow-500">★ {restaurant.rating}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
