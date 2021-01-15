import styled from "styled-components";

export const Container = styled.button`
  width: ${({ type }) => (type === "icon" ? "42px" : "220px")};
  height: 32px;
  font-size: 18px;
  border: none;
  background: #3a613e;
  opacity: 85%;
  border-radius: ${({ round }) => (round ? "50px" : 0)};
  margin: 10px;
  color: #f5f5f5;
  outline: none;
  box-sizing: content-box;

  cursor: pointer;

  @media (min-width: 640px) {
    width: 180px;
    background: transparent;
    border: ${({ type }) => (type === "icon" ? "none" : "1px solid #f5f5f5")};
  }
`;
