import styled from "styled-components";

export const Container = styled.div`
  font-size: 50px;
  font-family: "Native Spirit";
  padding-top: 50px;
  position: static;
  text-align: center;

  @media (min-width: 760px) {
    position: fixed;
    top: 25px;
    text-align: center;
    width: 100%;
    font-size: 70px;
  }
`;
