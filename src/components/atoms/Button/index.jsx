import { Container } from "./style";

const Button = ({ children, onClick, type, icon, round }) => {
  return (
    <Container onClick={onClick} round={round} type={type}>
      {type === "icon" ? <img src={icon} alt="Button" /> : children}
    </Container>
  );
};

export default Button;
