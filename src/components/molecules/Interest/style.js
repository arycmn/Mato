import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  border: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  width: 220px;
`;
export const Title = styled.div`
  font-weight: bold;
  text-align: left;
  font-size: 20px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: bottom;
  width: max-content;
  height: 62px;
  font-size: 18px;
  border: none;
  opacity: 85%;
  border-radius: 15px;
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
