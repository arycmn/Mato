import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 760px) {
    width: 50%;
    height: 70vh;

    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 5px;
      height: 8px;
    }

    ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.7);
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }
  }
`;
