import styled from "styled-components";

export const Container = styled.div`
  margin: 10px auto 0;
  width: 85%;
  background: #3a613e;
  filter: opacity(87%);
  padding: 5px;
`;

export const Fragment = styled.div`
  > .Button {
    outline: none;
    border: 0;
    width: 100%;
    background: transparent;
    cursor: pointer;
    display: flex;
    justify-content: start;
    align-items: center;
    color: #f5f5f5;
    font-size: 1.2rem;
    font-family: Poppings, sans-serif;
    margin: 5px 0;

    > img {
      width: 25px;
      height: 25px;
      padding-right: 10px;
    }
  }
`;
