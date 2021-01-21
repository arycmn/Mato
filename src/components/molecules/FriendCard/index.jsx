import { Container, Name } from "./style";
import Button from "../../atoms/Button";
import Picture from "../../atoms/Picture";

const FriendCard = ({ imgUrl, name }) => {
  const screenWidth = window.innerWidth;

  return (
    <Container>
      <Picture
        width="72px"
        height="72px"
        picturetype="profile"
        src={imgUrl}
      ></Picture>
      <Name>{name}</Name>
      <Button width="32px" height="32px" round={screenWidth > 760}>
        Follow
      </Button>
    </Container>
  );
};
export default FriendCard;
