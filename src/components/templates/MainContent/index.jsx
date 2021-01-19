import { Container } from "./style";

import Title from "../../atoms/Title";

const MainContent = ({ children, title }) => {
  return (
    <>
      <Title text={title} />
      <Container>{children}</Container>
    </>
  );
};

export default MainContent;
