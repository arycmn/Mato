import styled from "styled-components";

export const Container = styled.div`
  background-color: #1f2d1d;
  opacity: 0.7;
  margin: auto;
  width: 240px;
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  input {
    border: none;
    outline: none;
    background: inherit;
    width: 80%;
    color: #f5f5f5;
    font-weight: bold;
    padding: 0 8px;
  }
  img {
    max-width: 24px;
    max-height: 24px;
  }
`;
