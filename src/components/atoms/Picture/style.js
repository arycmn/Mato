import styled from "styled-components";

export const Container = styled.div`
    background-image: url(${props => props.srcPicture});
    width:${props => props.width};
    height: ${props => props.height};
    border-radius: ${({pictureType}) => pictureType === 'profile' ? 
        "50%" : pictureType === 'location' &&  "8%"};
    margin-top:200px;
    margin-left:200px;
@media (min-width:1024px){
        border-radius: ${({pictureType}) => pictureType === 'profile' ? 
        "50%" : pictureType === 'location' &&  "0%"};
    }
`;

export const Filter = styled.div`
    width:100%;
    height: 100%;
    background-color: ${props => props.filterColor};
    z-index:1;
    opacity:${props => props.filterOpacity};
    overflow:hidden;
    border-radius:inherit;
`;

export const Text = styled.div`
    color: #f5f5f5;
    position:absolute;
    margin-top:-40px;
    margin-left:10px;
    font-weight:${props => props.textWeight};
    
    @media (min-width:1024px){
        position:relative;
        text-align:center;
        margin-top:-50%;
        z-index:2;
        color: #f5f5f5;
    }
`