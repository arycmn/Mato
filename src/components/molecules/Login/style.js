import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  z-index: 100;
  margin: 30px;
  padding: 20px;
  @media (min-width: 760px) {
    width: 75vw;
    margin-left: 7vw;
    padding-right: 6vw;
  }
  @media (min-width: 1280px) {
    width: 78vw;
    > form div {
      height: 6vh;
    }
    > form div button {
      height: 5vh;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 220px;
  @media (min-width: 280px) {
    width: 150px;
  }
`;
export const Par = styled.p`
  color: red;
`;
