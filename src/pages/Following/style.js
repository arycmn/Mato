import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  > div:nth-child(1) {
    padding: 15px 0;
  }
  > div:nth-child(2) {
    margin-right: 0;
    background-color: transparent;
    > div:nth-child(1) {
      padding: 10px;
    }
    /*container de listagem*/
    > div:nth-child(2) {
      width: 40vw;
      display: flex;
      flex-flow: column;
      align-items: center;
      > div {
        justify-content: space-evenly;
        @media (min-height: 950px) {
          margin: 15px 0px;
        }
        > div:nth-child(2) {
          margin: 15px;
          @media (min-height: 950px) {
            margin: 20px;
          }
          @media (max-width: 280px) {
            margin: 0 -10px;
          }
        }
      }
      > div button {
        width: 80px;
        @media (max-width: 280px) {
          width: 55px;
          font-size: 16px;
          padding: 0 25px;
          margin: 0;
        }
      }
    }
  }
`;
