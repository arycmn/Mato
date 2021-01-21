import styled from "styled-components";

export const Container = styled.div`
  width: 348px;
  height: 110px;
  
  button {
    position:relative;
    left: 180px;
    top:-50px;
    width:100px;
    border-radius:5px;
  }
`;
export const LocationName = styled.div`
  font-size: 26px;
  padding: 0 6px;
  color: #252c1f;
  margin-top: -110px;
  margin-left: 100px;
  font-weight:300;
  @media (min-width: 760px) {
    color: #f5f5f5;
  }
`;

export const LocationDescription = styled.div`
  font-size: 20px;
  color: #f5f5f5;
  opacity: 0.8;
  margin-left: 110px;
  width: 180px;
  overflow-wrap: break-word;
  font-weight:200;
  font-size:16px;
`;

export const ButtonContainer = styled.div`
  margin-left: 100px;
`;
