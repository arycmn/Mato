import GlobalStyle from "./styles/global";
import Routes from "./routes";
import FooterMenu from "./components/molecules/FooterMenu";
import SiderMenu from "./components/molecules/SiderMenu";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  return (
    <>
      <div id="bg-filter"></div>
      <GlobalStyle />
      <Routes />
      {history.location.pathname === "/login" ||
      history.location.pathname === "/register" ||
      history.location.pathname === "/" ? (
        <></>
      ) : (
        <>
          <FooterMenu />
        </>
      )}
    </>
  );
}

export default App;
