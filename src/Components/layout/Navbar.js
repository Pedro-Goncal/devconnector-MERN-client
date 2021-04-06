//Router
import { Link } from "react-router-dom";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);

  const authLinks = (
    <ul>
      <li>
        <Link to={`/profile/${user?._id}`}>View Profile</Link>
      </li>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={(e) => dispatch(logout())} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      {!loading && <div>{isAuthenticated ? authLinks : guestLinks}</div>}
    </nav>
  );
};

export default Navbar;
