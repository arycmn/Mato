import styled from "styled-components";

export const Title = styled.div`
  width: 90%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 32px;
  font-family: "Poppins", sans-serif;
  color: #f5f5f5;

  div img {
    width: 32px;
    height: 32px;
  }
`;

export const LocalActivies = styled.div`
  font-family: "Poppins", sans-serif;
  @media (min-width: 1200px) {
    padding-top: 15px;

    position: absolute;

    right: 0px;
    top: 100px;

    height: 24vh;
    width: 30vw;

    margin: 0;

    font-weight: 300;
    font-size: 25px;
  }
`;

export const Container = styled.div`
  @media (min-width: 768px) {
    width: 55%;
    margin-left: 425px;
  }
  @media (width: 768px) {
    width: 55%;
    margin-left: 375px;
  }
  > div:nth-child(1) {
    @media (width: 1280px) {
      width: 63vw;
    }
    @media (max-width: 768px) {
      width: 90vw;
    }
    @media (width: 768px) {
      width: 35vh;
    }
  }

  /**MainContent */
  > div:nth-child(2) {
    > div:nth-child(4) {
      @media (min-width: 768px) {
        width: 37vw;
      }
      @media (min-width: 1200px) {
        width: 25vw;
      }
    } /*Button*/
    > button:nth-child(5) {
      margin: 0px;
      margin-bottom: 30px;
      @media (max-width: 375px) {
        margin-bottom: 30px;
      }
      @media (min-width: 411px) {
        margin-bottom: 0px;
      }
      @media (max-width: 540px) {
        margin-bottom: 30px;
      }
      @media (min-width: 1200px) {
        margin-left: 290px;
        margin-top: 0px;
      }
      @media (max-width: 540px) {
        margin-left: 0px;
        margin-top: 0px;
        height: 5vh;
      }
    }
    height: 81vh;
    @media (max-width: 375px) {
      height: 84vh;
    }
    @media (max-width: 280px) {
      height: 85vh;
      width: 104vw;
    }
    > div {
      @media (min-width: 1200px) {
        display: flex;
        color: white;
      }
      > img {
        padding-top: 10px;
        @media (max-width: 280px) {
          padding-top: 0px;
        }
        @media (min-width: 1200px) {
          width: 500px;
          height: 370px;
          margin-left: -210px;
          padding-right: 55px;
        }
      }
    }
  }
`;

export const LearnMoreText = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  @media (min-width: 1200px) {
    width: 50vw;
  }
  @media (max-width: 280px) {
    width: 100vw;
  }
  @media (min-width: 768px) {
    width: 45vw;
  }
  width: 80vw;

  word-break: break-word;

  div:nth-child(2) {
    text-decoration: underline;
    cursor: pointer;
  }
`;
