import GlobalStyle from "./styles/global";
import Routes from "./routes";
import UserInterest from "./pages/UserInterests";

function App() {
  return (
    <div id="bg-filter">
      <GlobalStyle />
      <Routes />
      <UserInterest />
    </div>
  );
}

export default App;
