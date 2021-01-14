import { Container } from "./style.js";
import FollowingList from "../../components/organisms/FollowingList";
import MainContent from "../../components/templates/MainContent";
import FooterMenu from "../../components/molecules/FooterMenu";

const Following = () => {
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
  ];

  return (
    <Container>
      <h1>Welcome $name</h1>
      <MainContent>
        <h2>Following</h2>
        <FollowingList data={data} />
      </MainContent>
      <FooterMenu />
    </Container>
  );
};

export default Following;
