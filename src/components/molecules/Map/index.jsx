import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";

import { Container } from "./style";

import mapIcon from "../../../utils/mapIcon";

const MapComponent = () => {
  const [initialPosition, setInitialPosition] = useState([0, 0]);
  const [campsites, setCampsites] = useState([
    { name: "Teste", position: initialPosition, id: 1 },
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  return (
    <Container>
      <MapContainer
        center={initialPosition}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {campsites.map((campsite, index) => (
          <Marker position={campsite.position} icon={mapIcon} key={index}>
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {campsite.name}
              <Link to={`/campsite/${campsite.id}`}>A</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Container>
  );
};

export default MapComponent;
