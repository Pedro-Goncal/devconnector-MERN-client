import { useEffect } from "react";

//ROUTER
import { Link } from "react-router-dom";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAccount,
  getCurrentProfile,
} from "../../redux/actions/profileActions";

//Components
import Loader from "../../Components/layout/Loader";
import DashboardActions from "../../Components/Dashboard/DashboardActions";
import Experience from "./Experience";
import Education from "./Education";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { profile, loading } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  return loading && profile === null ? (
    <Loader />
  ) : (
    <div>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" style={{ paddingRight: "10px" }}></i>Welcome{" "}
        {user && user.name}{" "}
      </p>
      {profile !== null ? (
        <div>
          {" "}
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div className="my-2">
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteAccount())}
            >
              <i className="fas fa-user-minus"></i> Delete My Account
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>You have not yet set a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
