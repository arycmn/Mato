import styled from "styled-components";

export const Header = styled.div`
  border-radius: 10px;
  padding: 10px;
  border: 50px;

  color: white;
  > div:nth-child(2) {
    padding-top: 15px;
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
      padding-left: 26vh;
      padding-top: 10vw;
      padding-bottom: 10vw;
      width: 200px;
      height: 200px;
    }
    @media (min-width: 1280px) {
      padding-left: 57vh;
      padding-top: 10vw;
      padding-bottom: 3vw;
    }
  }
`;
