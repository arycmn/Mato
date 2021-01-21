import styled from "styled-components";

export const Container = styled.div`
  background-color: #1f2d1d;
  opacity: 0.7;
  width: ${({ width }) => (width ? `${width}%` : "240px")};
  @media (min-width: 280px) {
    width: 60vw;
    margin-left: 5vw;
  }

  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  border-radius: 0px;
  margin: 10px;

  input {
    border: none;
    outline: none;
    background: inherit;
    width: 80%;
    color: #f5f5f5;
    font-weight: bold;
    padding: 0 8px;
    @media (min-width: 760px) {
      font-size: 25px;
    }
  }
  img {
    max-width: 24px;
    max-height: 24px;
  }
`;
