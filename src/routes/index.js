import { Switch, Route } from "react-router-dom";
import YourJourney from "../pages/YourJourney";

import Following from "../pages/Following";
import Search from "../pages/Search";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import UserInterests from "../pages/UserInterests";
import Location from "../pages/Location";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/profile" />
      <Route exact path="/following" component={Following} />
      <Route exact path="/your-journey" component={YourJourney} />
      <Route exact path="/user-interests" component={UserInterests} />
      <Route exact path="/invite" />
      <Route exact path="/search" component={Search} />
      <Route exact path="/news" />
      <Route exact path="/location/:id" component={Location} />
      <Route exact path="/reservation/:id" />
      <Route exact path="/checklist/:id" />
    </Switch>
  );
};

export default Routes;
