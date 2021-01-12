import { Container } from "./style";

const PushPin = ({ url }) => {
  return (
    <Container>
      <img src={url} alt="Local" />
    </Container>
  );
};

export default PushPin;
