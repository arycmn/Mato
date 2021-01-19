import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  max-height: 90vh;
  border-radius: 30px 30px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }

  @media (min-width: 760px) {
    background: transparent;
    width: 100%;

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
