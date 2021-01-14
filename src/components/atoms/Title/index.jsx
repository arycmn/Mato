import { Container } from "./style";

const Title = ({ text }) => {
  return <Container text={text}> {text}</Container>;
};

export default Title;
