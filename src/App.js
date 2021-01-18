import GlobalStyle from "./styles/global";
import Routes from "./routes";
import FooterMenu from "./components/molecules/FooterMenu";
import { useHistory } from "react-router-dom";
function App() {
  const history = useHistory();
  console.log(history);
  return (
    <div id="bg-filter">
      <GlobalStyle />
      <Routes />
      {history.location.pathname === "/login" ||
      history.location.pathname === "/register" ||
      history.location.pathname === "/home" ? (
        <></>
      ) : (
        <FooterMenu />
      )}
    </div>
  );
}

export default App;
