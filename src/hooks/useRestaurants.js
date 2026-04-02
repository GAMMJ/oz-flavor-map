import { useEffect, useState } from 'react';
import { getRestaurants } from '../api/restaurants';

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRestaurants()
      .then((data) => {
        setRestaurants(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { restaurants, loading, error };
};

export default useRestaurants;
