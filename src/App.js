import GlobalStyle from "./styles/global";
import Routes from "./routes";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <div id="bg-filter">
      <GlobalStyle />
      <Routes />
      <RegisterPage />
    </div>
  );
}

export default App;
