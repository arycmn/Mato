import {Container,PictureContainer,FavIconContainer} from './style'
import Picture from '../../atoms/Picture'
import FavoriteIcon from '../../atoms/FavoriteIcon'

const FeedPost = ({postSrc,profileSrc}) => {
    return(
        <Container>
            <Picture
                src={postSrc}
                width={'340px'}
                height={'340px'}
                ></Picture>
            <PictureContainer>
                <Picture
                    src={profileSrc}
                    width={'72px'}
                    height={'72px'}
                    ></Picture>
            </PictureContainer>
            <FavIconContainer>
                <FavoriteIcon></FavoriteIcon>
            </FavIconContainer>
        </Container>
    ) 
}

export default FeedPost