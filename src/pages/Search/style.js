import styled from "styled-components";

export const Container = styled.div`
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
  height: ${({ minimized }) => (minimized ? "35vh" : "70vh")};
  margin: 5px auto 0;
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

    @media (max-width: 280px) {
      width: 90px;
      height: 90px;
    }

    @media (min-width: 320px) {
      width: 105px;
      height: 105px;
    }

    @media (width: 360px) {
      width: 125px;
      height: 125px;
    }

    @media (width: 375px) {
      width: 130px;
      height: 130px;
    }

    @media (min-width: 411px) {
      width: 145px;
      height: 145px;
    }

    @media (width: 540px) {
      width: 200px;
      height: 200px;
    }
  }
`;
