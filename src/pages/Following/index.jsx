import { Container } from "./style.js";
import FollowingList from "../../components/organisms/FollowingList";
import MainContent from "../../components/templates/MainContent";
import FooterMenu from "../../components/molecules/FooterMenu";
import Title from "../../components/atoms/Title";

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
      name: "AAAA",
      image_url: "https://picsum.photos/200",
    },
  ];
  const name = "Lino";
  return (
    <Container>
      <Title text={`Welcome ${name}`}></Title>
      <MainContent>
        <Title text={"Following"}></Title>
        <FollowingList data={data} />
      </MainContent>
      <FooterMenu />
    </Container>
  );
};

export default Following;
