import styled from "styled-components";

export const Header = styled.div`
  padding: 10px;
  border: 50px;
  color: white;
 
  @media (min-width: 760px) {
    display: flex;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
  padding: 0px;
  }
  > img {
    padding-top: 15px;
    padding-bottom: 0px;
    width: 150px;
    height: 150px;
    padding-left: 15vh;
    @media (min-width: 280px) {
      padding-left: 10vh;
    }
    @media (min-width: 360px) {
      padding-left: 15vh;
    }
    @media (min-width: 375px) {
      padding-left: 13vh;
    }
    @media (min-width: 411px) {
      padding-left: 16vh;
    }
    @media (min-width: 540px) {
      padding-left: 25vh;
    }
    @media (min-width: 760px) {
      padding-left: 25vh;
      padding-top: 10vw;
      padding-bottom: 10vw;
      width: 400px;
      height: 400px;
    
  }
`;
