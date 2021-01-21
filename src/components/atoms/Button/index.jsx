import { Container } from "./style";

const Button = ({ children, onClick, type, icon, round, width, height }) => {
  return (
    <Container
      onClick={onClick}
      round={round}
      width={width}
      height={height}
      type={type}
    >
      {type === "icon" ? <img src={icon} alt="Button" /> : children}
    </Container>
  );
};

export default Button;
