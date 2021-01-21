import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useHistory } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { Container, TooltipStyle, LearnMore } from "./style";
import Picture from "../../atoms/Picture";

import mapIcon from "../../../utils/mapIcon";
import { Tooltip } from "@material-ui/core";
import Button from "../../atoms/Button";

const MapComponent = ({ data }) => {
  const [initialPosition, setInitialPosition] = useState([0, 0]);

  const history = useHistory();
  const [campsites, setCampsites] = useState([]);

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
        zoom={5}
        style={{ width: "60%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data?.map((campsite, index) => (
          <Marker
            position={[campsite.coords.lat, campsite.coords.lon]}
            icon={mapIcon}
            key={index}
          >
            <Popup
              closeButton={false}
              minWidth={40}
              maxWidth={115}
              className="map-popup"
            >
              <TooltipStyle>
                <Picture
                  src={campsite.image_url}
                  width={"120px"}
                  height={"120px"}
                  alt={"location"}
                  pictureType={"location"}
                  pictureText={campsite.name}
                  textWeight={100}
                />
              </TooltipStyle>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Container>
  );
};

export default MapComponent;
