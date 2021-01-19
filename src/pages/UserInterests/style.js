import styled from "styled-components";

export const Header = styled.div`
  padding: 10px;
  border-radius: 10px;
  border: 50px;
  color: white;
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

export const InterestsContainer = styled.div`
  margin:auto;
  display:flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display:flex;
  justify-content:center;
  margin:auto;
  width:220px;
  margin-bottom:100px;
  
  @media (min-width: 640px) {
    margin-top:120px;
  }

  @media (min-width: 900px) {
    margin-top:42px;
  }
`;