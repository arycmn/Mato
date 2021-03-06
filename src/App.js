import GlobalStyle from "./styles/global";
import Routes from "./routes";
import FooterMenu from "./components/molecules/FooterMenu";

import { useHistory } from "react-router-dom";

import { useEffect } from "react";
import { getUserListThunk } from "./store/modules/members/thunk";
import { useDispatch } from "react-redux";

function App() {
  const history = useHistory();
  
  const dispatch = useDispatch();

  useEffect(() => {
    if(history.location.pathname === '/'){
      history.push('/login')
    }
    dispatch(getUserListThunk());
  }, []);

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
