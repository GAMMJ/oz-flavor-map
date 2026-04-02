import { useEffect, useState } from 'react';
import { getRestaurants } from '../api/restaurants';

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRestaurants().then((data) => {
      setRestaurants(data);
      setLoading(false);
    });
  }, []);

  return { restaurants, loading };
};

export default useRestaurants;
