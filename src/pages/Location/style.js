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
export const LocalActivies = styled.div`
  padding-top: 25px;
  font-family: "Poppins", sans-serif;
`;
export const Container = styled.div`
  position: absolute;
  left: -2px;
`;
export const LearnMoreText = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  width: 80vw;
  word-break: break-word;
`;
