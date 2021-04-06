import { useEffect } from "react";

//Styles
import "./App.css";

//ROUTES
import Routes from "./Components/routing/Routes";

//Router
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { loadUser } from "./redux/actions/authActions";
import setAuthToken from "./utils/setAuthToken";

//Componets
import Navbar from "./Components/layout/Navbar";
import Landing from "./Components/layout/Landing";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
