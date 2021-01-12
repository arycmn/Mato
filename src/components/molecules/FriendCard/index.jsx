import { Container, Name } from "./style";
import Button from "../../atoms/Button";
import Picture from "../../atoms/Picture";
const FriendCard = ({ imgUrl, name }) => {
  return (
    <Container>
      <Picture src={imgUrl}></Picture>
      <Name>Nome Sobrenome</Name>
      <Button>Unfollow</Button>
    </Container>
  );
};
export default FriendCard;
