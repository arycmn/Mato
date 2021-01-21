import { Route, useHistory } from "react-router-dom";
import { Container } from "./style";
import { profile, search, home, logout } from "../../../utils/icons";

const FooterMenu = () => {
  const history = useHistory();

  const navigateTo = (route) => () => {
    if (route === "login") {
      localStorage.clear();
    }

    history.push(`/${route}`);
  };

  return (
    <Container>
      <img src={search} alt="Pesquisa" onClick={navigateTo("search")} />
      <img src={profile} alt="Perfil" onClick={navigateTo("profile")} />
      <img src={home} alt="Home" onClick={navigateTo("home")} />
      <img src={logout} alt="Logout" onClick={navigateTo("login")} />
    </Container>
  );
};

export default FooterMenu;
