import { Switch, Route } from "react-router-dom";
import YourJourney from "../pages/YourJourney";

import Following from "../pages/Following";
import Search from "../pages/Search";

import Location from "../pages/Location";
import Reservation from "../pages/Reservation";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" />
      <Route exact path="/login" />
      <Route exact path="/profile" />
      <Route exact path="/following" component={Following} />
      <Route exact path="/your-journey" />
      <Route exact path="/user-interests" />
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
