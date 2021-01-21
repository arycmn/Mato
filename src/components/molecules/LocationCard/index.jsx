import {
  Container,
  LocationName,
  LocationDescription,
  ButtonContainer,
} from "./style";
import Picture from "../../atoms/Picture";
import Button from "../../atoms/Button";
import { useHistory } from 'react-router-dom'

const LocationCard = ({ src, locationName, locationDescription,id }) => {
  const history = useHistory()
  return (
    <Container>
      <Picture
        src={src}
        picturetype={"location"}
        height={"100px"}
        width={"100px"}
      />
      <LocationName>
        {locationName.length > 13
          ? `${locationName.trim().split("").splice(0, 13).join("").trim()}...`
          : locationName}
      </LocationName>
      <LocationDescription>
        {locationDescription.length > 17
          ? `${locationDescription
              .trim()
              .split("")
              .splice(0, 17)
              .join("")
              .trim()}...`
          : locationDescription}
      </LocationDescription>
      <ButtonContainer>
        <Button onClick={() => history.push(`/location/${id}`)}width={"132px"} height={"42px"}>
          Saiba mais
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default LocationCard;
