import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  > div:nth-child(2) {
    width: 97vw;
    margin-right: 0;
    background-color: transparent;

    > div:nth-child(2) {
      width: 90vw;
      > div {
        display: flex;
        align-items: center;
        height: auto;
        width: 80vw;
        /*Imagem */
        > div:nth-child(1) {
          margin-left: 15vw;
        }
        /*Name */
        > div:nth-child(2) {
          margin-top: 0;
        }
        /*Button */
        > div:nth-child(3) {
          margin-left: -120px;
        }
      }
    }
  }
  @media (max-width: 540px) {
    > div:nth-child(2) {
      width: 90vw;
      margin-right: 0;
      background-color: transparent;

      > div:nth-child(2) {
        width: 90vw;
        > div {
          display: flex;
          align-items: center;
          height: auto;
          width: 80vw;
          margin-left: 15px;
          /*Imagem */
          > div:nth-child(1) {
            margin-left: -3vw;
            > img {
              width: 80px;
              height: 80px;
            }
          }
          /*Name */
          > div:nth-child(2) {
            margin-top: 0;
            margin-left: 50px;
            font-size: 20px;
          }
          /*Button */
          > div:nth-child(4) {
            margin-left: 20px;
            > button {
              width: 150px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 375px) {
    > div:nth-child(2) {
      > div:nth-child(2) {
        > div {
          /*Name */
          > div:nth-child(2) {
            margin-left: 25px;
          }
          /*Button */
          > div:nth-child(4) {
            > button {
              width: 100px;
              margin-left: 140px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 280px) {
    > div:nth-child(2) {
      > div:nth-child(2) {
        > div {
          /*Imagem */
          > div:nth-child(1) {
            > img {
              margin-left: -5vw;
            }
          }
          /*Name */
          > div:nth-child(2) {
            margin-left: 5px;
          }
          /*Button */
          > div:nth-child(4) {
            > button {
              width: 90px;
              font-size: 16px;
              margin-left: 105px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
`;

export const SelectorContainer = styled.div`
  width: 172px;
  margin: auto;
  margin-bottom: 30px;
`;

export const PageTitle = styled.div`
  font-size: 48px;
  margin-bottom: 30px;
  color: #f5f5f5;
`;

export const ButtonContainer = styled.div`
  width: 220px;
  margin: auto;
  margin-bottom: 62px;
  margin-top: 42px;
`;
