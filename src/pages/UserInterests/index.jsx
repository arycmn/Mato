import Interests from "../../components/molecules/Interest";
import FooterMenu from "../../components/molecules/FooterMenu";
import Title from "../../components/atoms/Title";
import Texts from "../../components/atoms/Texts";
import { Header } from "./style";

const UserInterests = () => {
  return (
    <>
      <Header>
        <Title text={"Interesses"} />
        <Texts
          text={
            "Nos conte um pouco mais sobre seus interesses, quais são as atividades que você gosta e os lugares que você curte"
          }
        />

        <Interests />
        <FooterMenu />
      </Header>
    </>
  );
};
export default UserInterests;
