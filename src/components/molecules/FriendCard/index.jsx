import { Container, Name } from "./style";
import Button from "../../atoms/Button";
import Picture from "../../atoms/Picture";
const FriendCard = ({ imgUrl, name }) => {
  return (
    <Container>
      <Picture
        width="72px"
        height="72px"
        pictureType="profile"
        src="https://dev.observatoriodocinema.bol.uol.com.br/wp-content/uploads/2017/12/8-avatar.jpg"
      ></Picture>
      <Name>Nome Sobrenome</Name>
      <Button>Unfollow</Button>
    </Container>
  );
};
export default FriendCard;
