import { useState } from "react";

//ROUTER
import { Link, Redirect } from "react-router-dom";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/actions/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  //Redirect if loged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h1 className="large text-primary">Sign in</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign in to your account
      </p>
      <form className="form" action="create-profile.html" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Sign in" />
      </form>
      <p className="my-1">
        Dont have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
