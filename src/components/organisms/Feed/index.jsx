import {Container} from './style'
import FeedPost from '../../molecules/FeedPost'

const Feed = () =>{
    return (
        <Container>
            <FeedPost postSrc={'https://picsum.photos/200'} profileSrc={'https://picsum.photos/200'}/>
            <FeedPost postSrc={'https://picsum.photos/200'} profileSrc={'https://picsum.photos/200'}/>
            <FeedPost postSrc={'https://picsum.photos/200'} profileSrc={'https://picsum.photos/200'}/>
            <FeedPost postSrc={'https://picsum.photos/200'} profileSrc={'https://picsum.photos/200'}/>
            <FeedPost postSrc={'https://picsum.photos/200'} profileSrc={'https://picsum.photos/200'}/>
            <FeedPost postSrc={'https://picsum.photos/200'} profileSrc={'https://picsum.photos/200'}/>
            <FeedPost postSrc={'https://picsum.photos/200'} profileSrc={'https://picsum.photos/200'}/>
            <FeedPost postSrc={'https://picsum.photos/200'} profileSrc={'https://picsum.photos/200'}/>
        </Container>
    )
}

export default Feed