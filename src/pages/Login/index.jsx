import Login from "../../components/molecules/Login";
import Title from "../../components/atoms/Title";
import { Header } from "./style";

const LoginPage = () => {
  return (
    <Header>
      <Title text={"Login"} />
      <Login />;
    </Header>
  );
};

export default LoginPage;
