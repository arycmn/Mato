import { Container } from "./style";
import { checkedIcon, uncheckedIcon } from "../../../icons";

const Checkbox = ({ onClick, status }) => {
  return (
    <Container onClick={onClick} status={status}>
      {status ? (
        <img src={checkedIcon} alt="checked" />
      ) : (
        <img src={uncheckedIcon} alt="unchecked" />
      )}
    </Container>
  );
};

export default Checkbox;
