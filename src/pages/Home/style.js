import styled from "styled-components";

export const Container = styled.div`
  /*MainContent */
  margin-top: 30px;
  overflow: hidden;

  > div:nth-child(2) {
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
        position: relative;
        left: 270px;
        font-weight: 200;
      }
      > div:nth-child(2) {
        padding-bottom: 20px;
        position: relative;
        left: 270px;
        font-weight: 200;
      }
      > div:nth-child(3) {
        font-weight: 200;
        position: relative;
        left: 420px;
      }
      > div:nth-child(4) {
        font-weight: 200;
        position: relative;
        left: 420px;
      }
      > div:nth-child(5) {
        font-weight: 200;
        position: relative;
        left: 148px;
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
        width: 60vw;
        display: flex;
        width: 5vw;
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
        color: white;
      }
    }
  }
`;

export const Recomended = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  width: 90vw;
  color: white;
  padding: 10px 0;
`;
export const ImagemContainer = styled.div`
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  text-align: center;
  margin: 15px;
  padding: 15px;

  > div {
    justify-content: flex-start;
    @media (min-width: 760px) {
      &::before,
      &::after {
        position: absolute;
        transition: all 0.2s;
        transition-delay: 0.2s;
        transform: translateY(0px) translateX(0px);
        z-index: -1;
      }

      &:hover {
        cursor: pointer;
        animation-name: hoverPop;
        animation-duration: 0.4s;
        img {
          box-shadow: 2px 2px 4px 0px rgba(10, 12, 15, 0.27);
          box-shadow: 0px 0px 30px 0px rgba(10, 12, 15, 0.27);
        }
        &::before {
          animation: slick-hover-2 3s 0.4s linear infinite;
          transform: translateY(-20px) translateX(-20px);
        }
        &::after {
          animation: slick-hover 3s 0.4s linear infinite reverse;
          transform: translateY(20px) translateX(20px);
        }
      }
    }

    @keyframes hoverPop {
      0%,
      100% {
        transform: scale(1);
      }
      33% {
        transform: scale(1.05);
      }
      66% {
        transform: scale(0.9);
      }
    }

    @keyframes slick-hover {
      0.00% {
        transform: translateY(20px) translateX(20px);
      }
      16.67% {
        transform: translateY(-13px) translateX(-9px);
      }
      33.33% {
        transform: translateY(4px) translateX(12px);
      }
      50.00% {
        transform: translateY(20px) translateX(-20px);
      }
      66.67% {
        transform: translateY(-3px) translateX(8px);
      }
      83.33% {
        transform: translateY(-15px) translateX(-11px);
      }
      100.00% {
        transform: translateY(20px) translateX(20px);
      }
    }

    @keyframes slick-hover-2 {
      0.00% {
        transform: translateY(-20px) translateX(-20px);
      }
      16.67% {
        transform: translateY(3px) translateX(-5px);
      }
      33.33% {
        transform: translateY(18px) translateX(-10px);
      }
      50.00% {
        transform: translateY(-20px) translateX(20px);
      }
      66.67% {
        transform: translateY(15px) translateX(-4px);
      }
      83.33% {
        transform: translateY(-1px) translateX(15px);
      }
      100.00% {
        transform: translateY(-20px) translateX(-20px);
      }
    }
  }
  @media (min-width: 280px) {
    padding-bottom: 35px;
  }

  > div div {
    padding: 20px;
    color: white;
    display: flex;
    justify-content: center;
    font-size: 20px;
    width: 170px;

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
    border-radius: 15px;
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
