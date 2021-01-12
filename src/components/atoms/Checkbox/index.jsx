import { Container } from "./style";
import { checkedIcon, uncheckedIcon } from "../../../icons";

const Checkbox = ({ onClick, status }) => {
  return (
    <Container onClick={onClick} status={status}>
      {status === "checked" ? (
        <img src={checkedIcon} alt="Checked" />
      ) : (
        <img src={uncheckedIcon} alt="unchecked" />
      )}
    </Container>
  );
};

export default Checkbox;
