import { Container } from "./style";
import FriendCard from "../../molecules/FriendCard";

const FollowingList = ({ data }) => {
  return (
    <Container>
      {data.map((user, index) => (
        <FriendCard key={index} imgUrl={user.image_url} name={user.name} />
      ))}
    </Container>
  );
};

export default FollowingList;
