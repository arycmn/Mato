import styled from "styled-components";

export const Container = styled.div`
  width: 348px;
  height: 110px;
  button {
    margin-left: 120px;
    margin-top: 8px;
  }
`;
export const LocationName = styled.div`
  font-size: 26px;
  padding: 0 6px;
  color: #252c1f;
  margin-top: -110px;
  margin-left: 100px;

  @media (min-width: 760px) {
    color: #f5f5f5;
  }
`;

export const LocationDescription = styled.div`
  font-size: 20px;
  color: #252c1f;
  opacity: 0.8;
  margin-left: 110px;
  width: 180px;
  overflow-wrap: break-word;
`;

export const ButtonContainer = styled.div`
  margin-left: 100px;
`;
