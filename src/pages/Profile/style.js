import styled from "styled-components";

export const BoxContainer = styled.div`
  text-align: center;
  color: white;
  max-width: 350px;
  margin: 30px;
  @media (min-width: 760px) {
    margin-left: 400px;
    max-width: 1200px;
  }
`;
export const Avatar = styled.img`
  text-align: center;
  width: 200px;
  border-radius: 50%;
  margin-top: 50px;
  @media (max-width: 760px) {
    width: 100px;
    margin-top: 20px;
  }
`;
export const Interests = styled.div``;
export const Following = styled.div`
  @media (max-width: 280px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
        display: flex;
        flex-flow: column;
        align-items: center;
        > div {
          justify-content: space-around;

          > div:nth-child(2) {
            margin: 15px;

            @media (max-width: 280px) {
              margin: 0 -10px;
            }
          }
        }
      }
    }
  }
`;
export const Followers = styled.div``;
export const ChangeInfo = styled.button`
  background-color: green;
  border: none;
  border-radius: 10px;
  margin: 15px;
  padding: 10px;
  @media (max-width: 760px) {
    font-size: 14px;
  }
`;
export const Name = styled.div`
  font-size: 30px;
  margin: 10px;

  @media (max-width: 760px) {
    font-size: 18px;
  }
`;
export const Text = styled.div`
  font-size: 20px;
  margin: 10px;
  @media (max-width: 760px) {
    font-size: 14px;
  }
`;
