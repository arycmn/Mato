import styled from "styled-components";

export const Container = styled.div`
  > div:nth-child(1) {
    padding-top: 20px;
    padding-bottom: 20px;
    position:relative;
    left:300px;  
  }
  > div:nth-child(2) .Link {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  /*MainContent */
  > div:nth-child(2) {
    /*background-color: transparent;*/
    margin: 0;
    width: 100vw;

    @media (max-width: 280px) {
      width: 100vw;
    }
    @media (min-width: 540px) {
      width: 100vw;
      height: 90vh;
    }
    @media (min-width: 768px) {
      width: 95vw;
    }
    @media (min-width: 1280px) {
      width: 96.8vw;
      height: 86.8vh;
      color: whitesmoke;
      
        > div:nth-child(1) {
      padding-top: 20px;
      padding-bottom: 20px;
      position:relative;
      left:270px;
      font-weight:200;  
      }
      > div:nth-child(2) {
      padding-bottom: 20px;
      position:relative;
      left:270px;  
      font-weight:200;
      }
      > div:nth-child(3) {
      font-weight:200;
      position:relative;
      left:420px;
      }
      > div:nth-child(4) {
      font-weight:200;
      position:relative;
      left:420px;
      }
      > div:nth-child(5) {
      font-weight:200;
      position:relative;
      left:148px;
      }
    }
    > div {
      display: flex;
      @media (max-width: 540px) {
        justify-content: center;
      }
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
    > div:nth-child(2) {
      > img {
        height: 56px;
        height: 56px;
      }
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
export const ImagemContainer = styled.div`
  height: auto;
  display: flex;
  flex-flow: row wrap;
  > div {
    justify-content: flex-start;
    @media (min-width: 280px) {
      padding-bottom: 35px;
    }
  }
  > div div {
    color: white;

    display: flex;
    justify-content: center;

    font-size: 20px;

    width: 170px;
    margin-top: -75px;
    @media (min-width: 280px) {
      justify-content: center;

      font-size: 15px;

      width: 115px;
      margin-top: -55px;
    }
    @media (min-width: 360px) {
      justify-content: center;

      font-size: 20px;

      width: 160px;
      margin-top: -65px;
    }
    @media (min-width: 411px) {
      justify-content: center;

      font-size: 22px;

      width: 180px;
      margin-top: -75px;
    }
  }
  > div img {
    @media (min-width: 280px) {
      width: 105px;
      height: 105px;
      padding: 5px;
    }
    @media (min-width: 360px) {
      width: 150px;
      height: 150px;
      padding: 5px;
    }
    @media (min-width: 411px) {
      width: 170px;
      height: 170px;
      padding: 5px;
    }
  }
`;
