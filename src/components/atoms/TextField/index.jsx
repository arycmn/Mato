import { Container } from "./style";

const TextField = ({
  icon,
  placeholderText,
  type = "text",
  width,
  value,
  onChange,
}) => {
  return (
    <Container width={width}>
      <img src={icon} alt="icon" />
      <input
        type={type}
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
      ></input>
    </Container>
  );
};

export default TextField;
