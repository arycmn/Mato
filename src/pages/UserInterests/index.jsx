import Interests from "../../components/molecules/Interest";
import Title from "../../components/atoms/Title";
import Texts from "../../components/atoms/Texts";
import { Header,InterestsContainer,ButtonContainer } from "./style";
import logo from "../../images/logo Mato.png";
import Button from "../../components/atoms/Button";

const UserInterests = () => {
  return (
    <>
      <Header>
      <img src={logo}></img>
        <Title text={"Interesses"} />
        <Texts
          text={
            "Nos conte um pouco mais sobre seus interesses, quais são as atividades que você gosta e os lugares que você curte"
          }
        />
        <InterestsContainer>
          <Interests />
        </InterestsContainer>
        <ButtonContainer>
          <Button round >Continue</Button>
        </ButtonContainer>
      </Header>
    </>
  );
};
export default UserInterests;
