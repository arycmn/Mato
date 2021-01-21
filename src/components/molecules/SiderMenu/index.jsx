import { Route, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "./style";
import mato from "../../../images/mato.png";

const SiderMenu = () => {
  const history = useHistory();
  console.log(history);
  useEffect(() => {
    console.log("a");
  }, [history]);
  const navigateTo = (route) => () => {
    if (route === "login") {
      localStorage.clear();
    }

    history.push(`/${route}`);
  };

  return (
    <>
      {localStorage.length === 0 ? (
        <Container>
          <img src={mato} alt={"logo"} />
          <button onClick={navigateTo("home")}> Home </button>
          <button onClick={navigateTo("login")}> Login </button>
          <button onClick={navigateTo("register")}> Cadastre-se </button>
          <button onClick={navigateTo("search")}> Explorar </button>
        </Container>
      ) : (
        <Container>
          <img src={mato} alt={"logo"} />

          <button onClick={navigateTo("home")}> Home </button>
          <button onClick={navigateTo("login")}> Log out </button>
          <button onClick={navigateTo("search")}> Explorar </button>
          <button onClick={navigateTo("profile")}> Perfil</button>
          <button onClick={navigateTo("following")}> Campistas</button>
        </Container>
      )}
    </>
  );
};

export default SiderMenu;
