import { useState, useEffect } from "react";

import LocationList from "../../components/organisms/LocationList";
import ViewOptions from "../../components/molecules/ViewOptions";
import MainContent from "../../components/templates/MainContent";
import MapComponent from "../../components/molecules/Map";
import Button from "../../components/atoms/Button";
import Title from "../../components/atoms/Title";
import {useDispatch, useSelector } from 'react-redux'
import { getCampsites } from '../../store/modules/camps/thunk'

import {
  Container,
  SelectorContainer,
  LocationsContainer,
  ButtonContainer,
} from "./style";

const YourJourney = () => {
  const [viewList, setViewList] = useState(false);
  const [width, setWidth] = useState(0);
  const dispatch = useDispatch();
  const { campsList } = useSelector((store) => store);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);
  
  useEffect(() => {
    dispatch(getCampsites());
  }, []);


  return (
    <Container>
      <Title text={"Escolha seu destino"}></Title>
      <MainContent>
        {width < 760 ? (
          <>
            <SelectorContainer>
              <ViewOptions viewList={viewList} setViewList={setViewList} />
            </SelectorContainer>
            {viewList ? (
              <LocationList data={campsList} />
            ) : (
              <>
                <MapComponent data={campsList}/>
                <ButtonContainer>
                  <Button width={"220px"} height={"56px"} round>
                    Escolher
                  </Button>
                </ButtonContainer>
              </>
            )}
          </>
        ) : (
          <LocationsContainer>
            <MapComponent data={campsList}/>
            <LocationList data={campsList} />
          </LocationsContainer>
        )}
      </MainContent>
    </Container>
  );
};

export default YourJourney;
