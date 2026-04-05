import { BASE_URL } from '../api/config';

const RestaurantCard = ({ restaurant, onFavorite }) => {
  return (
    <div className="flex cursor-pointer flex-col gap-2" onClick={() => onFavorite?.(restaurant)}>
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-200">
        <img
          src={`${BASE_URL}/${restaurant.image.src}`}
          alt={restaurant.image.alt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-0.5 px-1">
        <span className="truncate text-sm font-semibold text-gray-900">
          {restaurant.title}
        </span>
        <span className="line-clamp-2 text-xs text-gray-500">
          {restaurant.description}
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
