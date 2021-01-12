import { Container } from "./style";

const Checkbox = ({ children, onClick, icon, type }) => {
  return (
    <Container onClick={onClick} type={type}>
      {type === "icon" ? <img src={icon} alt="Button" /> : children}
    </Container>
  );
};

export default Checkbox;
