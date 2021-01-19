import styled from "styled-components";

export const Title = styled.div`
  width: 100vw;
  height: 10vh;

  font-size: 32px;
  font-family: "Poppins", sans-serif;
  color: #f5f5f5;
  margin: 0 0 0 25px;

  > div {
    height: auto;
    width: auto;
  }
  > div img {
    width: 30px;
    height: 30px;
    margin-right: 52px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  position: absolute;
  left: -2px;
  > div div:nth-child(4) {
    margin: 40px;
    margin-bottom: 40px;
  }
`;
export const CalendarContainer = styled.div`
  > div:nth-child(1) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  > div:nth-child(2) {
    padding: 10px 0;
  }
`;
export const LearnMoreText = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  width: 80vw;
  word-break: break-word;
`;
export const BarDays = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  > .active {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;

    width: 100px;
    height: 60%;

    background-color: #2c482f;
  }
  width: 85vw;
  height: 5vh;

  background-color: rgba(58, 97, 62, 0.7);
  border-radius: 10px;
`;
