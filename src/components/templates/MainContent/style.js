import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f5f5;
  width: 90vw;
  height: 90vh;
  margin-right: 100px;
  border-radius: 30px 30px 0px 0px;
  padding: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;

  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;
