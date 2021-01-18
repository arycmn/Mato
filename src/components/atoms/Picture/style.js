import styled from "styled-components";

export const Container = styled.div`
  background-image: url(${({ srcPicture }) => srcPicture});
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ picturetype }) =>
    picturetype === "profile" ? "50%" : picturetype === "location" && "8%"};
  @media (min-width: 1024px) {
    border-radius: ${({ picturetype }) =>
      picturetype === "profile" ? "50%" : picturetype === "location" && "0%"};
  }
`;

export const Filter = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ filterColor }) => filterColor};
  z-index: 1;
  opacity: ${({ filterOpacity }) => filterOpacity};
  overflow: hidden;
  border-radius: inherit;
`;

export const Text = styled.div`
  color: #f5f5f5;
  position: absolute;
  margin-top: -40px;
  margin-left: 10px;
  font-weight: ${({ textWeight }) => textWeight};

  @media (min-width: 1024px) {
    position: relative;
    text-align: center;
    margin-top: -50%;
    z-index: 2;
    color: #f5f5f5;
  }
`;
