import { useEffect } from "react";

//ROUTER
import { Link } from "react-router-dom";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { getProfileById } from "../../redux/actions/profileActions";

//Components
import Loader from "../layout/Loader";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileGitHub from "./ProfileGitHub";

const Profile = ({ match }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { profile, loading } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfileById(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <div>
      {profile === null || loading ? (
        <Loader />
      ) : (
        <div>
          <Link to="/profiles" className="btn btn-light">
            Back to profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          <div class="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Experience</h2>
              {profile.experience.length > 0 ? (
                <div className="profile-exp">
                  {profile.experience.map((exp) => (
                    <ProfileExperience key={exp._id} experience={exp} />
                  ))}
                </div>
              ) : (
                <h4>No Experience</h4>
              )}
            </div>

            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {profile.education.length > 0 ? (
                <div className="profile-exp">
                  {profile.education.map((edu) => (
                    <ProfileEducation key={edu._id} education={edu} />
                  ))}
                </div>
              ) : (
                <h4>No Education</h4>
              )}
            </div>

            {profile.gitHubUsername && (
              <ProfileGitHub username={profile.gitHubUsername} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
