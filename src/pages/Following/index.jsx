import { Container } from "./style.js";
import FollowingList from "../../components/organisms/FollowingList";

const Following = () => {
  const data = [
    {
      name: "Jorge",
      image_url:
        "https://www.pexels.com/photo/bald-man-with-a-serious-facial-expression-2380794/",
    },
    {
      name: "Marcos",
      image_url:
        "https://www.pexels.com/photo/closeup-photo-of-man-s-face-2099225/",
    },
    {
      name: "Silvia",
      image_url:
        "https://www.pexels.com/photo/women-s-white-framed-sunglasses-2690323/",
    },
    {
      name: "Mario",
      image_url: "https://www.pexels.com/photo/collage-photo-of-woman-3812743/",
    },
    {
      name: "Silvio",
      image_url:
        "https://www.pexels.com/photo/man-cross-legs-seating-on-white-wooden-chair-1270076/",
    },
  ];

  return (
    <Container>
      <h1>Welcome $name</h1>
      <h2>Following</h2>
      <FollowingList data={data} />
    </Container>
  );
};

export default Following;
