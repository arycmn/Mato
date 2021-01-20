import styled from "styled-components";

export const Container = styled.div`
  > div:nth-child(1) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  /*MainContent */
  > div:nth-child(2) {
    /*background-color: transparent;*/

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > div:nth-child(1) {
      div:nth-child(2) {
        padding-left: 20px;
        font-size: 25px;
        width: 66vw;
      }
    }

    > div:nth-child(2) {
      display: flex;
      div:nth-child(2) {
        width: 66vw;
        padding-left: 20px;
        font-size: 25px;
      }
    }
    > div:nth-child(3) {
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 300;
      line-height: 36px;
      letter-spacing: 0em;
      text-align: left;

      padding-top: 25px;

      width: 90vw;

      display: flex;
      justify-content: flex-start;
    }
    > div img {
      height: 56px;
      height: 56px;
    }
  }
`;

export const Recomended = styled.div`
  > div:nth-child(1) {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;

    width: 90vw;

    padding: 10px 0;
  }
`;
