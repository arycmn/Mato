import { Container } from "./style";

const TextField = ({ icon, placeholderText }) => {
  return (
    <Container>
      <img src={icon} alt="icon" />
      <input type="text" placeholder={placeholderText}></input>
    </Container>
  );
};

export default TextField;
