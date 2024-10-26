// frontend/src/services/locationService.js

import Geolocation from 'react-native-geolocation-service';
import api from './api';

const updateLocation = async (userId) => {
  Geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      await api.post('/location/update', {
        userId,
        location: { type: 'Point', coordinates: [longitude, latitude] },
      });
    },
    (error) => {
      console.error(error);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
};

export { updateLocation };
