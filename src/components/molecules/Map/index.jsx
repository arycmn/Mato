import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useHistory } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { Container,TooltipStyle,LearnMore } from "./style";
import Picture from '../../atoms/Picture'

import mapIcon from "../../../utils/mapIcon";
import { Tooltip } from "@material-ui/core";
import Button from "../../atoms/Button";

const MapComponent = () => {

  const [initialPosition, setInitialPosition] = useState([0, 0]);
  
  const history = useHistory()
  const [campsites, setCampsites] = useState([
    { name: "Lorem ipsum", position: [-24.234802, -52.3719937], id: 1 },
    { name: "Lorem ipsum", position: [-23.999999, -52.1000000], id: 1 },
    { name: "Lorem ipsum", position: [-23.799999, -52.3000000], id: 1 },
    { name: "Lorem ipsum", position: [-24.099999, -52.7000000], id: 1 },
    { name: "Lorem ipsum", position: [-24.234802, -52.0000000], id: 1 },
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
        center={[-24.034802, -52.3719337]}
        zoom={9}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {campsites.map((campsite, index) => (
          <Marker 
            position={campsite.position} 
            icon={mapIcon} 
            key={index}
          >
            <Popup 
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              <TooltipStyle>
                <Picture
                  src={"https://picsum.photos/200"}
                  width={'120px'}
                  height={'120px'}
                  alt={'aow'}
                  pictureType={'location'}
                  pictureText={"aooow"}
                  textWeight={100}

                />
                {campsite.name}
                <LearnMore>
                  <Button width={'100px'}onClick={() => history.push(`/campsite/${campsite.id}`)}>Learn More</Button>
                </LearnMore>
              </TooltipStyle>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Container>
  );
};

export default MapComponent;
