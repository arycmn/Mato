import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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
      padding-top: 10px;
    }
    > div:nth-child(2) {
      > div {
        justify-content: space-evenly;
        > div:nth-child(2) {
          margin: 0 -10px;
        }
      }
      > div button {
        width: 100px;
        @media (max-width: 280px) {
          width: 55px;
          font-size: 16px;
          padding: 0 20px;
          margin: 0;
        }
      }
    }
  }
`;
