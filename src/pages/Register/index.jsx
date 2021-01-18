import Register from "../Register";
import Title from "../../components/atoms/Title";
import { Header } from "./style";

const RegisterPage = () => {
  return (
    <Header>
      <Title text={"Cadastre - se"} />
      <Register />;
    </Header>
  );
};

export default RegisterPage;
