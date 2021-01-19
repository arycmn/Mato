import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  z-index: 100;
  margin: 30px;
  padding: 20px;
  @media (min-width: 760px) {
    box-sizing: content-box;
    width: 38vw;

    > form div {
      padding: 10px;
      height: 6vh;
      width: 100%;
      margin: 10px;
    }
    > form div button {
      height: 5vh;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  /* width: 220px; */
  @media (min-width: 280px) {
    width: 150px;
  }
`;
export const Par = styled.p`
  color: red;
`;
