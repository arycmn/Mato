import {Container,PictureContainer,FavIconContainer} from './style'
import Picture from '../../atoms/Picture'
import FavoriteIcon from '../../atoms/FavoriteIcon'

const FeedPost = () => {
    return(
        <Container>
            <Picture
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'}
                width={'340px'}
                height={'340px'}
                ></Picture>
            <PictureContainer>
                <Picture
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'}
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