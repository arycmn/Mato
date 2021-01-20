import { Route, useHistory } from "react-router-dom";
import { Container } from "./style";
import mato from "../../../images/mato.png";

const SiderMenu = () => {
  const history = useHistory();

  const navigateTo = (route) => () => {
    if (route === "login") {
      localStorage.clear();
    }

    history.push(`/${route}`);
  };

  return (
    <Container>
      <img src={mato} alt={"logo"} />
      <button onClick={navigateTo("search")}> Explorar </button>
      <button onClick={navigateTo("profile")}> Seu perfil</button>
      <button onClick={navigateTo("home")}> Home </button>
      <button onClick={navigateTo("login")}> Log out </button>
      <button> </button>
    </Container>
  );
};

export default SiderMenu;
