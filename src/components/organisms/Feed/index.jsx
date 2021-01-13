import {Container} from './style'
import FeedPost from '../../molecules/FeedPost'

const Feed = ({data}) =>{
    return (
        <Container>
            {data.map(({image_url,user_profile_picture}) => <FeedPost postSrc={image_url} profileSrc={user_profile_picture}/>)}
        </Container>
    )
}

export default Feed