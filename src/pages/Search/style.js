import styled from "styled-components";

export const Container = styled.div`
  z-index: -1;
  @media (min-width: 760px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 400px;
    display: inline-block;
  }

  @media (max-width: 760px) {
    div:first-child {
      margin: 0 auto;
    }
  }

  button {
    width: 80px;
    margin-left: 15px;
    border-radius: 10px;
  }
  input {
    border: none;
    outline: none;
    background-color: #1f2d1d;
    opacity: 0.7;
    border-radius: 31px;
    width: 60%;
    color: #f5f5f5;
    font-weight: bold;
    padding: 0 8px;
    height: 36px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    margin: 10px;
    display: inline-block;
    @media (min-width: 760px) {
      width: 700px;
      font-size: 25px;
      padding: 0px;
    }

    img {
      max-width: 24px;
      max-height: 24px;
      padding: 0px;
      margin: 0 auto;
    }
  }

  button {
    display: inline-block;
    width: 80px;
  }
`;

export const LocationList = styled.div`
  width: 90%;
  height: ${({ minimized }) => (minimized ? "35vh" : "78vh")};
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
