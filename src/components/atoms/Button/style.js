import styled from "styled-components";

export const Container = styled.button`
  width: ${({ type }) => (type === "icon" ? "42px" : "220px")};
  height: 62px;
  font-size: 18px;
  border: none;
  background: #ffffff;
  opacity: 85%;
  border-radius: ${({ round }) => (round ? "50px" : 0)};
  margin: 10px;
  color: black;
  outline: none;
  padding: 10px;
  box-sizing: content-box;

  cursor: pointer;

  @media (min-width: 640px) {
    width: 180px;
    background: transparent;
    border: ${({ type }) => (type === "icon" ? "none" : "1px solid #f5f5f5")};
  }
`;
