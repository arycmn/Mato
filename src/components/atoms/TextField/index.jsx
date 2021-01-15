import { Container } from "./style";

const TextField = ({ icon, placeholderText, type = "text", width }) => {
  return (
    <Container width={width}>
      <img src={icon} alt="icon" />
      <input type={type} placeholder={placeholderText}></input>
    </Container>
  );
};

export default TextField;
