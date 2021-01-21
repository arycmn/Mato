import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 90px;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
  width: 67vw;

  align-items: center;
  > div img {
    border-radius: 50%;
  }

  button {
    width: 30%;

    @media (min-width: 760px) {
      width: 20%;
    }
  }
`;

export const Name = styled.div`
  font-size: 22px;
  width: 100px;
  text-align: start;

  @media (min-width: 760px) {
    color: #f5f5f5;
    width: 500px;
  }
`;
