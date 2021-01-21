import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  width: 90vw;
  margin: auto;
  @media (min-width: 768px) {
    margin: 0;
  }
  > div {
    width: 80px;
    margin: 10px;
  }
  @media (min-width: 1200px) {
    position: absolute;

    right: 80px;
    top: 150px;

    height: 24vh;
    width: 25vw;

    margin: 0;
  }
`;
