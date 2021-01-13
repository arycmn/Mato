import { Switch, Route } from "react-router-dom";
import Following from "../pages/Following";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" />
      <Route exact path="/login" />
      <Route exact path="/profile" />
      <Route exact path="/following">
        <Following />
      </Route>
      <Route exact path="/your-journey" />
      <Route exact path="/user-interests" />
      <Route exact path="/invite" />
      <Route exact path="/search" />
      <Route exact path="/news" />
      <Route exact path="/location/:id" />
      <Route exact path="/reservation/:id" />
      <Route exact path="/checklist/:id" />
    </Switch>
  );
};

export default Routes;
