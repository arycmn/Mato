import {
  Container,
  LocationName,
  LocationDescription,
  ButtonContainer,
} from "./style";
import Picture from "../../atoms/Picture";
import Button from "../../atoms/Button";

const LocationCard = ({ src, locationName, locationDescription }) => {
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
        <Button width={"132px"} height={"42px"}>
          Learn More
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default LocationCard;
