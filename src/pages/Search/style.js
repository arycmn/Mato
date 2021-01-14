import styled from "styled-components";

export const Container = styled.div`
  /* padding-top: 10px; */

  div:first-child {
    margin: 0 auto;
  }

  button {
    width: 80px;
    margin-left: 15px;
  }
`;

export const Title = styled.h1`
  margin: 0 20px;
  font: 400 2.5rem Poppins, sans-serif;
  color: #fff;
`;

export const LocationList = styled.div`
  width: 90%;
  height: 70vh;
  margin: 10px auto 0;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }

  div {
    display: inline;
    padding: 10px;
  }

  img {
    border-radius: 10px;
    margin: 8px;
  }
`;
