import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useHistory } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { Container, TooltipStyle, LearnMore } from "./style";
import Picture from "../../atoms/Picture";

import mapIcon from "../../../utils/mapIcon";
import { Tooltip } from "@material-ui/core";
import Button from "../../atoms/Button";

const MapComponent = () => {
  const [initialPosition, setInitialPosition] = useState([0, 0]);

  const history = useHistory();
  const [campsites, setCampsites] = useState([
    { name: "Lorem ipsum", position: [-24.234802, -52.3719937], id: 1 },
    { name: "Lorem ipsum", position: [-23.999999, -52.1], id: 2 },
    { name: "Lorem ipsum", position: [-3.0453597, -59.9666284], id: 3 },
    { name: "Lorem ipsum", position: [-5.5026167, -47.4794435], id: 4 },
    { name: "Lorem ipsum", position: [-5.5513801, -47.3868164], id: 5 },
    { name: "Lorem ipsum", position: [-7.1360763, -34.8187943], id: 6 },
    { name: "Lorem ipsum", position: [-7.0220509, -34.8303759], id: 7 },
    { name: "Lorem ipsum", position: [-5.8095684, -35.1949118], id: 8 },
    { name: "Lorem ipsum", position: [-5.7382424, -35.2056365], id: 9 },
    { name: "Lorem ipsum", position: [-5.5331606, -35.8130229], id: 10 },
    { name: "Lorem ipsum", position: [-3.7202283, -38.5125215], id: 11 },
    { name: "Lorem ipsum", position: [-3.7501044, -38.9525549], id: 12 },
    { name: "Lorem ipsum", position: [-4.9448338, -45.1051204], id: 13 },
    { name: "Lorem ipsum", position: [-1.4417918, -48.4689431], id: 14 },
    { name: "Lorem ipsum", position: [-3.1321911, -58.4362881], id: 15 },
    { name: "Lorem ipsum", position: [-4.2305893, -69.9356275], id: 16 },
    { name: "Lorem ipsum", position: [-8.4840975, -70.4766535], id: 17 },
    { name: "Lorem ipsum", position: [-9.9769134, -67.7929728], id: 18 },
    { name: "Lorem ipsum", position: [-20.8311648, -54.7982137], id: 19 },
    { name: "Lorem ipsum", position: [-20.7994787, -54.9478003], id: 20 },
    { name: "Lorem ipsum", position: [-20.4813686, -54.6257115], id: 21 },
    { name: "Lorem ipsum", position: [-20.2240218, -54.5898371], id: 22 },
    { name: "Lorem ipsum", position: [-20.1391614, -54.4005456], id: 23 },
    { name: "Lorem ipsum", position: [-24.7484051, -52.0541601], id: 24 },
    { name: "Lorem ipsum", position: [-24.3288307, -50.6202045], id: 25 },
    { name: "Lorem ipsum", position: [-25.0991441, -50.1571703], id: 26 },
    { name: "Lorem ipsum", position: [-25.4351088, -49.2323795], id: 27 },
    { name: "Lorem ipsum", position: [-30.017468, -51.1921308], id: 28 },
    { name: "Lorem ipsum", position: [-22.0685441, -41.1819133], id: 29 },
    { name: "Lorem ipsum", position: [-17.4870787, -44.76816], id: 30 },
    { name: "Lorem ipsum", position: [-16.7035224, -49.2696367], id: 31 },
    { name: "Lorem ipsum", position: [-19.3927464, -40.0642055], id: 32 },
    { name: "Lorem ipsum", position: [-20.1031984, -44.9693388], id: 33 },
    { name: "Lorem ipsum", position: [-14.155352, -56.0305787], id: 34 },
    { name: "Lorem ipsum", position: [-11.8696756, -53.5378181], id: 35 },
    { name: "Lorem ipsum", position: [-11.1584409, -61.7719603], id: 36 },
    { name: "Lorem ipsum", position: [-20.4711868, -54.6221608], id: 37 },
    { name: "Lorem ipsum", position: [-10.2475041, -48.320814], id: 38 },
    { name: "Lorem ipsum", position: [-12.1846432, -43.2206014], id: 39 },
    { name: "Lorem ipsum", position: [-8.9420025, -54.872239], id: 40 },
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
          <Marker position={campsite.position} icon={mapIcon} key={index}>
            <Popup
              closeButton={false}
              minWidth={40}
              maxWidth={100}
              className="map-popup"
            >
              <TooltipStyle>
                <Picture
                  src={"https://picsum.photos/200"}
                  width={"120px"}
                  height={"120px"}
                  alt={"aow"}
                  pictureType={"location"}
                  pictureText={"aooow"}
                  textWeight={100}
                />
                {campsite.name}
                <LearnMore>
                  <Button
                    width={"100px"}
                    onClick={() => history.push(`/campsite/${campsite.id}`)}
                  >
                    Learn More
                  </Button>
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
