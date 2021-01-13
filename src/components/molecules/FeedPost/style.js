import styled from "styled-components";

export const Container = styled.div`
    margin:auto;
    width:340px;
    height:340px;
`;

export const PictureContainer = styled.div`
    width:72px;
    height:72px;
    border-radius: 50%;
    overflow: hidden;
    margin-left:260px;
    margin-top:-45px;
`;

export const FavIconContainer = styled.div`
    width: 72px;
    height:72px;
    position:absolute;

    background-color:#f5f5f5;
    border-radius:50%;
    z-index:1;
    
    margin-left:12px;
    margin-top:-60px;

    img{
        margin-left:8px;
        margin-top:8px;
    }
`;
