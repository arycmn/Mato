import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  z-index: 100;
  margin: 30px;
  margin-top: 22px;
  padding: 20px;

  p {
    margin-left: 22px;
    margin-top: -8px;
  }

  @media (min-width: 760px) {
    box-sizing: content-box;
    width: 38vw;
    height: 500px;

    > form div {
      padding: 10px;
      height: 6vh;
      width: 100%;
      margin: -0px;
    }
    > form div button {
      height: 5vh;
    }
    > form {
      height: auto;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin: auto;
  margin-top: 45px;
  width: 220px;
  display: flex;
  justify-content: center;
  border: black dotted 10px;
  @media (min-width: 760px) {
    display: flex;
    align-items: stretch;
  }
`;
export const Par = styled.p`
  color: red;
`;
