import { Container } from "./style.js";
import FollowingList from "../../components/organisms/FollowingList";
import MainContent from "../../components/templates/MainContent";
import Title from "../../components/atoms/Title";

const Following = () => {
  const width = window.innerWidth;

  const data = [
    {
      name: "Jorge",
      image_url: "https://picsum.photos/200",
    },
    {
      name: "Marcos",
      image_url: "https://picsum.photos/200",
    },
    {
      name: "Silvia",
      image_url: "https://picsum.photos/200",
    },
    {
      name: "Mario",
      image_url: "https://picsum.photos/200",
    },
    {
      name: "Silvio",
      image_url: "https://picsum.photos/200",
    },
    {
      name: "Silvio",
      image_url: "https://picsum.photos/200",
    },
    {
      name: "Silvio",
      image_url: "https://picsum.photos/200",
    },
    {
      name: "Silvio",
      image_url: "https://picsum.photos/200",
    },
    {
      name: "Silvio",
      image_url: "https://picsum.photos/200",
    },
    {
      name: "Silvio",
      image_url: "https://picsum.photos/200",
    },
    {
      name: "Silvio",
      image_url: "https://picsum.photos/200",
    },
  ];

  return (
    <Container>
      <MainContent title="Following">
        <FollowingList data={data} />
      </MainContent>
    </Container>
  );
};

export default Following;
