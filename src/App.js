import GlobalStyle from "./styles/global";
import Routes from "./routes";
import FooterMenu from "./components/molecules/FooterMenu";
function App() {
  return (
    <div id="bg-filter">
      <GlobalStyle />
      <Routes />
      <FooterMenu />
    </div>
  );
}

export default App;
