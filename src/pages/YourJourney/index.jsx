import { useState, useEffect } from "react";

import LocationList from "../../components/organisms/LocationList";
import ViewOptions from "../../components/molecules/ViewOptions";
import MainContent from "../../components/templates/MainContent";
import MapComponent from "../../components/molecules/Map";
import Button from "../../components/atoms/Button";
import Title from "../../components/atoms/Title";

import {
  Container,
  SelectorContainer,
  LocationsContainer,
  ButtonContainer,
} from "./style";

const YourJourney = () => {
  const [viewList, setViewList] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  const data = [
    {
      name: "Lorem Ipsum",
      description: "",
      pictureSrc: "https://picsum.photos/200",
    },
    {
      name: "Lorem Ipsum",
      description: "",
      pictureSrc: "https://picsum.photos/200",
    },
    {
      name: "Lorem Ipsum",
      description: "",
      pictureSrc: "https://picsum.photos/200",
    },
    {
      name: "Lorem Ipsum",
      description: "",
      pictureSrc: "https://picsum.photos/200",
    },
    {
      name: "Lorem Ipsum",
      description: "",
      pictureSrc: "https://picsum.photos/200",
    },
    {
      name: "Lorem Ipsum",
      description: "",
      pictureSrc: "https://picsum.photos/200",
    },
    {
      name: "Lorem Ipsum",
      description: "",
      pictureSrc: "https://picsum.photos/200",
    },
  ];

  return (
    <Container>
      <Title text={"Choose Your Journey"}></Title>
      <MainContent>
        {width < 760 ? (
          <>
            <SelectorContainer>
              <ViewOptions viewList={viewList} setViewList={setViewList} />
            </SelectorContainer>
            {viewList ? (
              <LocationList data={data} />
            ) : (
              <>
                <MapComponent />
                <ButtonContainer>
                  <Button width={"220px"} height={"56px"} round>
                    Choose
                  </Button>
                </ButtonContainer>
              </>
            )}
          </>
        ) : (
          <LocationsContainer>
            <MapComponent />
            <LocationList data={data} />
          </LocationsContainer>
        )}
      </MainContent>
    </Container>
  );
};

export default YourJourney;
