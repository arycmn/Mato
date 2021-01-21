import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  padding: 20px;
  border-radius: 10px;
  border: 50px;

  @media (min-width: 1280px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const PlacesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 280px;
  height: 200px;
  margin-top: 10px;

  @media (min-width: 450px) {
    width: 400px;
    height: 200px;
    justify-content: start;
  }

  @media (min-width: 640px) {
    width: 600px;
    height: 200px;
    justify-content: center;
  }

  @media (min-width: 900px) {
    width: 667px;
    height: 200px;
    justify-content: start;
  }

  @media (min-width: 1280px) {
    width: 70%;
    height: 200px;
    padding: 2%;
  }
`;
export const ActivityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 280px;
  height: 300px;
  margin-top: 10px;

  @media (min-width: 450px) {
    width: 400px;
    height: 200px;
    justify-content: start;
  }

  @media (min-width: 640px) {
    width: 600px;
    height: 200px;
    justify-content: center;
    > button {
      margin-top: 10px;
    }
  }

  @media (min-width: 900px) {
    width: 667px;
    height: 200px;
    justify-content: start;
  }
  @media (min-width: 1280px) {
    width: 70%;
  }
`;
export const Title = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 110px;
  height: 90px;
  font-size: 18px;
  border: ${({ selected }) =>
    selected ? "4px solid rgb(58, 97, 62, 0.7)" : "none"};
  opacity: 85%;
  border-radius: 15px;
  margin: 0 10px;
  color: #3a613e;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;

  @media (min-width: 640px) {
    width: 180px;
  }
`;
