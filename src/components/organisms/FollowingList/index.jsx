import { Container } from "./style";
import FriendCard from "../../molecules/FriendCard";

const FollowingList = ({ data }) => {
  return (
    <Container>
      {data.map((user) => (
        <FriendCard imgUrl={user.image_url} name={user.name} />
      ))}
    </Container>
  );
};

export default FollowingList;
