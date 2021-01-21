import { Container } from "./style";
import FriendCard from "../../molecules/FriendCard";

const FollowingList = ({ data }) => {
  return (
    <Container>
      {data.map((user, index) => (
        <FriendCard key={index} imgUrl={user.image_url} name={user.completeName} />
      ))}
    </Container>
  );
};

export default FollowingList;
