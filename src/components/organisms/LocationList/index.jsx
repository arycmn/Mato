import LocationCard from '../../molecules/LocationCard'
import { Container } from './style'

const LocationList = ({data}) => {
    return(
        <Container>
        {data.map(({name,description,pictureSrc}) => 
            <LocationCard
            src={pictureSrc}
            locationName={name}
            locationDescription={description}
            />
        )}
        </Container>
    )
}
export default LocationList