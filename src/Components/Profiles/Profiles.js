import { useEffect } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { getProfiles } from "../../redux/actions/profileActions";

//Components
import ProfileItem from "./ProfileItem";
import Loader from "../../Components/layout/Loader";

const Profiles = () => {
  const dispatch = useDispatch();
  const { profiles, loading } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop"></i> Browse and connect with
            developers
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              <div>
                {profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))}
              </div>
            ) : (
              <h4>No Profiles found...</h4>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profiles;
