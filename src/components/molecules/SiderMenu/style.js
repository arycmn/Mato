import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 20px;

  img {
    margin: 30px;
    align-self: center;
    height: 250px;
    width: 250px;
  }
  button {
    background-color: transparent;
    color: white;
    border: none;
    padding: 20px;
    font-size: 22px;
    font-family: "Poppins", sans-serif;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
