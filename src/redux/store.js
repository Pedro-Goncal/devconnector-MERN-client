import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//Reducers
import { alertReducer } from "./reducers/alertReducer";
import { authReducer } from "./reducers/authReducer";
import { profileReducer } from "./reducers/profileReducer";
import { postReducer } from "./reducers/postReducer";

const reducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  profile: profileReducer,
  post: postReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
