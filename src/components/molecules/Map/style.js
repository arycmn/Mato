import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 50vh;
  border-radius: 8px;
  margin-left:210px;
  margin-right:-210px;
  margin-top:-160px;

  @media (min-width: 760px) {
    width: 45%;
  }
`;

export const TooltipStyle = styled.div`
  height: 120px;
  display: flex;
  font-size: 16px;
  align-items: bottom;
`;

export const LearnMore = styled.div`
  margin-top: 72px;
  margin-left: -25px;
    position:relative;
    left:0;
  > button {
    background-color:green;
    width:100px;
    
  }
`;
