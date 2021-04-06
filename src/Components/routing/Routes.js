//ROUTER
import { Route, Switch } from "react-router-dom";

//COMPONENTS
import Login from "../auth/Login";
import Register from "../auth/Register";
import Alert from "../layout/Alert";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoute from "../routing/PrivateRoutes";
import CreateProfile from "../ProfileForm/CreateProfile";
import EditProfile from "../ProfileForm/EditProfile";
import AddExperience from "../ProfileForm/AddExperience";
import AddEducation from "../ProfileForm/AddEducation";
import Profiles from "../Profiles/Profiles";
import Profile from "../Profile/Profile";
import Posts from "../Posts/Posts";
import Post from "../Post/Post";
import NotFound from "../layout/NotFound";

const Routes = (props) => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />

        {/*PRIVATE ROUTES MUST BE LOGED IN*/}
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/post/:id" component={Post} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

Routes.propTypes = {};

export default Routes;
