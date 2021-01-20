import Title from "../../components/atoms/Title";
import Backpack from "../../utils/backpack.svg";
import MainContent from "../../components/templates/MainContent";
import { Container, Recomended } from "./style";

const Reservation = () => {
  const name = "Leandro";
  return (
    <Container>
      <Title text={`Welcome ${name}`}></Title>
      <MainContent>
        <div>
          <img alt={"Backpack-Icon"} src={Backpack}></img>
          <div>News</div>
        </div>
        <div>
          <img alt={"Backpack-Icon"} src={Backpack}></img>
          <div>New Journey</div>
        </div>
        <div>Following</div>
        <Recomended>
          <div>Recomended Places</div>
        </Recomended>
      </MainContent>
    </Container>
  );
};
export default Reservation;
