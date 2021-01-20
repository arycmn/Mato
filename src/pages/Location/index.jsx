import { useState } from "react";
import FavoriteIcon from "../../components/atoms/FavoriteIcon";
import Picture from "../../components/atoms/Picture";
import Button from "../../components/atoms/Button";
import MainContent from "../../components/templates/MainContent";
import LocalActivityList from "../../components/molecules/LocalActivityList";
import FooterMenu from "../../components/molecules/FooterMenu";
import { Title, LocalActivies, Container, LearnMoreText } from "./style";

const Location = () => {
  const [LearnMore, SetLearnMore] = useState(false);
  const obj = {
    id: 15,
    name: "camp title",
    coords: {
      lon: "1010010",
      lat: "1010010",
    },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    address: "rua tal n132",
    contact: {
      phone_number: "123123123",
      email: "test1@test.com",
    },
    activities_id: [1, 3],
    pictureSrc: "https://picsum.photos/200",
  };
  return (
    <Container>
      <Title>
        <div>Location</div>
        <FavoriteIcon />
      </Title>
      <MainContent text={null}>
        <Picture
          alt={"Location Picture"}
          src={obj.pictureSrc}
          picturetype={"location"}
          height={"220px"}
          width={"300px"}
        ></Picture>
        {LearnMore ? (
          <LearnMoreText>
            <div>{obj.description}</div>
            <div onClick={() => SetLearnMore(!LearnMore)}>Hide</div>
          </LearnMoreText>
        ) : (
          <LearnMoreText>
            <div>{obj.description.split("").splice(0, 35).join("")}...</div>
            <div onClick={() => SetLearnMore(!LearnMore)}>LearnMore</div>
          </LearnMoreText>
        )}
        <LocalActivies>Local Activies</LocalActivies>
        <LocalActivityList activityID={[1, 2, 3, 4, 5]}></LocalActivityList>
        <Button width={"267px"} height={"52px"} round>
          Continue
        </Button>
      </MainContent>
    </Container>
  );
};
export default Location;
