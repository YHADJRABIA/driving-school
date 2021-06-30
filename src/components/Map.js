import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const position = [45.3934, 4.3217];
  const addressFraisse = [45.38981, 4.26674];
  const addressRicamarie = [45.40395, 4.36657];
  return (
    <div id="mapid">
      <MapContainer center={position} zoom={11} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={addressFraisse}>
          <Popup>4 Rue de la Gare — 42490 Fraisses</Popup>
        </Marker>
        <Marker position={addressRicamarie}>
          <Popup>4 Place Michel Rondet — 42150 La Ricamarie</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
