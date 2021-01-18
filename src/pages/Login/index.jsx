import Login from "../../components/molecules/Login";
import Title from "../../components/atoms/Title";
import { Header } from "./style";
import logo from "../../images/logo Mato.png";

const LoginPage = () => {
  return (
    <Header>
      <img src={logo}></img>
      <Title text={"Login"} />
      <Login />
    </Header>
  );
};

export default LoginPage;
