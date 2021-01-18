import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  background: #fff;
  width: 100%;
  padding: 12px;

  display: flex;
  justify-content: space-around;

  img {
    cursor: pointer;
    width: 7%;

    @media (min-width: 640px) {
      max-width: 30px;
    }
  }
`;
