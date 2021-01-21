import { Container } from "./style";

const LocalActivity = ({ icon, title }) => {
  return (
    <Container>
      <figure>
        <img src={icon} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </Container>
  );
};

export default LocalActivity;
