import styled from "styled-components";

export const Container = styled.div`
    width:172px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #ccc;
    display:flex;
    align-items:center;
`;


export const LeftFilter = styled.div`
    width:86px;
    height: 40px;
    border-radius: 10px 0px 0px 10px;
    display:flex;
    align-items:center;
    background-color: ${({hide}) => hide ? "transparent":"#ccc"};
`

export const RightFilter = styled.div`
    width:86px;
    height: 40px;
    border-radius: 0px 10px 10px 0px;
    display:flex;
    align-items:center;
    background-color: ${({hide}) => hide ? "transparent":"#ccc"};
`

export const Icon = styled.img`
    width:26px;
    height: 26px;
    margin-left:28px;
`; 