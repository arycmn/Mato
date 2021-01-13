import { Container, SelectorContainer } from './style'
import LocationList from '../../components/organisms/LocationList'
import ViewOptions from '../../components/molecules/ViewOptions'

const YourJourney = () => {

    const data = [
        {
            name:"Lorem Ipsum",
            description:"",
            pictureSrc:"https://picsum.photos/200"
        },
        {
            name:"Lorem Ipsum",
            description:"",
            pictureSrc:"https://picsum.photos/200"
        },
        {
            name:"Lorem Ipsum",
            description:"",
            pictureSrc:"https://picsum.photos/200"
        },
        {
            name:"Lorem Ipsum",
            description:"",
            pictureSrc:"https://picsum.photos/200"
        },
        {
            name:"Lorem Ipsum",
            description:"",
            pictureSrc:"https://picsum.photos/200"
        },
        {
            name:"Lorem Ipsum",
            description:"",
            pictureSrc:"https://picsum.photos/200"
        },
        {
            name:"Lorem Ipsum",
            description:"",
            pictureSrc:"https://picsum.photos/200"
        }
    ]

    return (
        <Container>
            <SelectorContainer>
                <ViewOptions>
                </ViewOptions>
            </SelectorContainer>
            <LocationList data={data}>
            </LocationList>
        </Container>
    )
}

export default YourJourney