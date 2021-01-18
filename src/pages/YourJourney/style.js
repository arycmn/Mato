import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  > div:nth-child(2) {
    @media (max-width: 800px) {
      width: auto;
      padding-left: 150px;
    }
  }
`;

export const SelectorContainer = styled.div`
  width: 172px;
  margin: auto;
  margin-bottom: 30px;
`;

export const PageTitle = styled.div`
  font-size: 48px;
  margin-bottom: 30px;
  color: #f5f5f5;
`;

export const ButtonContainer = styled.div`
  width: 220px;
  margin: auto;
  margin-bottom: 62px;
  margin-top: 42px;
`;
