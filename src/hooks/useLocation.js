import { useEffect, useState } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      () => {
        setLocationError('위치를 불러오지 못했습니다.');
      }
    );
  }, []);

  return { location, locationError };
};

export default useLocation;
