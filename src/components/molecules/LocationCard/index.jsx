import { Container,LocationName,LocationDescription } from "./style";
import Picture from '../../atoms/Picture'
import Button from '../../atoms/Button'

const LocationCard = ({ src,locationName, locationDescription }) => {
  return (<Container>
      <Picture
        src={src}
        pictureType={'location'}
        height={'100px'}
        width={'100px'}
      />
      <LocationName>{locationName.length > 13 ? 
        `${locationName.trim()
          .split('')
          .splice(0,13)
          .join("")
          .trim()}...` : 
          locationName
        }
      </LocationName>
      <LocationDescription>{locationDescription.length > 25 ? 
              `${locationDescription.trim()
                .split('')
                .splice(0,30)
                .join("")
                .trim()}...` : 
                locationDescription
              }</LocationDescription>
      <Button>Learn More</Button>
  </Container>);
};

export default LocationCard;
