import { Children } from 'react'
import { Container } from './style'

const MainContent = ({Children}) => {
    return <Container>
        {Children}
    </Container>
}

export default MainContent