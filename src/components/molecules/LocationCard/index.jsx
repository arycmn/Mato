import { Container } from "./style";
import Picture from '../../atoms/Picture'

const LocationCard = ({ props }) => {
  return (<Container>
      <Picture
        src={'https://media-cdn.tripadvisor.com/media/photo-s/17/a1/89/53/doward-park-campsite.jpg'}
        pictureType={'location'}
        height={'100px'}
        width={'100px'}
      />
  </Container>);
};

export default LocationCard;
