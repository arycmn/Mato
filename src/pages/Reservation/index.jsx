import FavoriteIcon from "../../components/atoms/FavoriteIcon";
import Picture from "../../components/atoms/Picture";
import Button from "../../components/atoms/Button";
import MainContent from "../../components/templates/MainContent";
import {
  Title,
  Container,
  LearnMoreText,
  BarDays,
  CalendarContainer,
} from "./style";
import Calendar from "../../components/atoms/Calendar";
import { useState } from "react";
const Reservation = () => {
  const [StateActive, setActive] = useState(0);
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
    <div>
      <Title>
        Location <FavoriteIcon />
      </Title>
      <Container>
        <MainContent>
          <Picture
            alt={"Location Picture"}
            src={obj.pictureSrc}
            pictureType={"location"}
            height={"220px"}
            width={"300px"}
          ></Picture>
          <LearnMoreText>How long do you intend to stay?</LearnMoreText>
          <BarDays>
            <div
              onClick={() => setActive(0)}
              className={StateActive === 0 ? "active" : ""}
            >
              1 - 2 days
            </div>
            <div
              onClick={() => setActive(1)}
              className={StateActive === 1 ? "active" : ""}
            >
              3 - 5 days
            </div>
            <div
              onClick={() => setActive(2)}
              className={StateActive === 2 ? "active" : ""}
            >
              6 - 10 days
            </div>
          </BarDays>
          <CalendarContainer>
            <Calendar label="Data de InÍcio"></Calendar>
            <Calendar label="Data Final"></Calendar>
          </CalendarContainer>

          <Button width={"267px"} height={"52px"} round>
            Continue
          </Button>
        </MainContent>
      </Container>
    </div>
  );
};
export default Reservation;
