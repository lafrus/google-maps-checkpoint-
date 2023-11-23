import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey="4ny_4voHR2zAJS0RpeWh1sXYI2ty6nek398bGBjZ_eY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Child components, such as markers, go here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
