import { Container, Name } from "./style";
import Button from "../../atoms/Button";
import Picture from "../../atoms/Picture";

const FriendCard = ({ imgUrl, name }) => {
  return (
    <Container>
      <Picture
        width="72px"
        height="72px"
        picturetype="profile"
        src={imgUrl}
      ></Picture>
      <Name>{name}</Name>
      <Button width="92px" height="32px">
        Unfollow
      </Button>
    </Container>
  );
};
export default FriendCard;
