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
  padding-top: 15px;
  font-family: "Poppins", sans-serif;
`;

export const Container = styled.div`
  width: 100%;
`;

export const LearnMoreText = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  width: 80vw;
  word-break: break-word;

  div:nth-child(2) {
    text-decoration: underline;
  }
`;
