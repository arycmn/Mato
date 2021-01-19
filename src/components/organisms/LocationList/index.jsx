import LocationCard from '../../molecules/LocationCard'
import { Container } from './style'

const LocationList = ({data}) => {
    return(
        <Container>
        {data.map(({name,description,pictureSrc} , index) => 
            <LocationCard
                key={index}
                src={pictureSrc}
                locationName={name}
                locationDescription={description}
            />
        )}
        </Container>
    )
}
export default LocationList