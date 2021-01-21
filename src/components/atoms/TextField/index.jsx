import { Container } from "./style";

const TextField = ({
  icon,
  placeholderText,
  type = "text",
  width,
  value,
  onChange,
  name,
  inputRef,
}) => {
  return (
    <Container width={width}>
      <img src={icon} alt="icon" />
      <input
        type={type}
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
        name={name}
        ref={inputRef}
      ></input>
    </Container>
  );
};

export default TextField;
