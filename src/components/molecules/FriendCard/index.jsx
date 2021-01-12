import { Container, Name } from "./style";
import Button from "../../atoms/Button";
const FriendCard = ({ imgUrl, name }) => {
  return (
    <Container>
      <img src="https://www.estrelando.com.br/uploads/2018/06/21/johnny-depp-1-2-1529613101.jpg"></img>
      <Name>Nome Sobrenome</Name>
      <Button>Unfollow</Button>
    </Container>
  );
};
export default FriendCard;
