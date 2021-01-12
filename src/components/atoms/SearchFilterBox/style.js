import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  height: 380px;
`;
export const Fragment = styled.div`
  > .Button {
    border: 0;
    background: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      width: 20px;
      height: 20px;
      padding-right: 10px;
    }
  }
`;
