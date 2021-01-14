import { Switch, Route } from "react-router-dom";

import Following from "../pages/Following";
<<<<<<< HEAD
import Search from "../pages/Search";

=======
import Location from "../pages/Location";
>>>>>>> 84a1cda16c2aae612eb320845628f7b539055216
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
      <Route exact path="/reservation/:id" />
      <Route exact path="/checklist/:id" />
    </Switch>
  );
};

export default Routes;
