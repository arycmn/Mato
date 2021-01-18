import { Switch, Route } from "react-router-dom";

import Following from "../pages/Following";
import Search from "../pages/Search";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import UserInterests from "../pages/UserInterests";
import Location from "../pages/Location";
<<<<<<< HEAD
=======
import Reservation from "../pages/Reservation";
>>>>>>> 4465be916cdd7466313f6d3276732eeef8001ff8

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/profile" />
      <Route exact path="/following" component={Following} />
      <Route exact path="/your-journey" />
      <Route exact path="/user-interests" component={UserInterests} />
      <Route exact path="/invite" />
      <Route exact path="/search" component={Search} />
      <Route exact path="/news" />
      <Route exact path="/location/:id" component={Location} />
      <Route exact path="/reservation/:id" component={Reservation} />
      <Route exact path="/checklist/:id" />
    </Switch>
  );
};

export default Routes;
