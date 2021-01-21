import { Container } from "./style";
import FriendCard from "../../molecules/FriendCard";

const FollowingList = ({ data }) => {
  // console.log(data);

  return (
    <Container>
      {data.length > 0 ? (
        data.map((user, index) => (
          <FriendCard
            key={index}
            imgUrl={user.image_url}
            name={user.completeName}
          />
        ))
      ) : (
        <div>Você não está seguindo ninguém</div>
      )}
    </Container>
  );
};

export default FollowingList;
