import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 50vh;
  border: 1px solid #3a613e;
  border-radius: 8px;

  @media (min-width: 760px) {
    width: 45%;
  }
`;

export const TooltipStyle = styled.div`
  height: 120px;
  display: flex;
  font-size: 16px;
  align-items: bottom;
`;

export const LearnMore = styled.div`
  margin-top: 72px;
  margin-left: -25px;
`;
