import LocationCard from '../../molecules/LocationCard'
import { Container } from './style'

const LocationList = ({data}) => {
    return(
        <Container>
        {data?.map(({name,description,image_url,id} , index) => 
            <LocationCard
                key={index}
                src={image_url}
                locationName={name}
                locationDescription={description}
                id={id}
            />
        )}
        </Container>
    )
}
export default LocationList