import Interests from "../../components/molecules/Interest";
import Title from "../../components/atoms/Title";
import Texts from "../../components/atoms/Texts";
import {
  Header,
  InterestsContainer,
  ButtonContainer,
  TextContainer,
} from "./style";
import logo from "../../images/logo Mato.png";
import Button from "../../components/atoms/Button";
import { useHistory } from "react-router-dom";
import SiderMenu from "../../components/molecules/SiderMenu";

const UserInterests = () => {
  const history = useHistory();

  return (
    <>
      <Header>
        <img src={logo} alt={"logo"}></img>

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
          <Button round onClick={() => history.push("/home")}>
            Continue
          </Button>
        </ButtonContainer>
      </Header>
    </>
  );
};
export default UserInterests;
