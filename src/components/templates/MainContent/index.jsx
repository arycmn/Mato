import { Container } from "./style";

import Title from "../../atoms/Title";

const MainContent = ({ children, title }) => {
  return (
    <>
      {title && <Title text={title} />}
      <Container>{children}</Container>
    </>
  );
};

export default MainContent;
