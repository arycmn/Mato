import Register from "../../components/molecules/Register";
import Title from "../../components/atoms/Title";
import { Header } from "./style";
import logo from "../../images/logo Mato.png";

const RegisterPage = () => {
  return (
    <Header>
      <img src={logo} alt={"logo"}></img>
      <Title text={"Cadastre - se"} />
      <Register />;
    </Header>
  );
};

export default RegisterPage;
