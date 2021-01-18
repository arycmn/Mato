import { Container, SelectorContainer,PageTitle,ButtonContainer } from './style'
import LocationList from '../../components/organisms/LocationList'
import ViewOptions from '../../components/molecules/ViewOptions'
import MainContent from '../../components/templates/MainContent'
import FooterMenu from '../../components/molecules/FooterMenu'
import { useSelector } from 'react-redux'
import MapComponent from '../../components/molecules/Map'
import Button from '../../components/atoms/Button'

const YourJourney = () => {

    const viewDisplay = useSelector(store => store.viewDisplayPreferences)

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
            <PageTitle>Choose Your Journey</PageTitle>
            <MainContent>
                <SelectorContainer>
                    <ViewOptions >
                    </ViewOptions>
                </SelectorContainer>
                {viewDisplay.selectedView === 'list' &&
                        <LocationList data={data}>
                        </LocationList>}
                {viewDisplay.selectedView === 'map' &&
                <>
                    <MapComponent/>
                    <ButtonContainer>
                        <Button 
                            width={'220px'}
                            height={'56px'}
                            round
                        >Choose</Button>
                    </ButtonContainer>
                </>
                }
            </MainContent>
            <FooterMenu></FooterMenu>
        </Container>
    )
}

export default YourJourney