import { useState, useEffect } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  createProfile,
  getCurrentProfile,
} from "../../redux/actions/profileActions";

//ROUTER
import { Link } from "react-router-dom";

const EditProfile = ({ history }) => {
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [skills, setSkills] = useState("");
  const [gitHubUsername, setGitHubUsername] = useState("");
  const [bio, setBio] = useState("");
  const [twitter, setTwitter] = useState("http://");
  const [facebook, setFacebook] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [youtube, setYoutube] = useState("");
  const [instagram, setInstagram] = useState("");
  const [displaySocialInputs, setDisplaySocialInputs] = useState(false);

  const dispatch = useDispatch();

  const { profile, loading } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getCurrentProfile());

    if (!profile) {
      history.push("/login");
    } else {
      setCompany(loading || !profile.company ? "" : profile.company);
      setWebsite(loading || !profile.website ? "" : profile.website);
      setLocation(loading || !profile.location ? "" : profile.location);
      setStatus(loading || !profile.status ? "" : profile.status);
      setSkills(loading || !profile.skills ? "" : profile.skills.join(","));
      setGitHubUsername(
        loading || !profile.gitHubUsername ? "" : profile.gitHubUsername
      );
      setBio(loading || !profile.bio ? "" : profile.bio);
      setTwitter(
        loading || !profile.social ? "http://" : profile.social.twitter
      );
      setFacebook(loading || !profile.social ? "" : profile.social.facebook);
      setLinkedIn(loading || !profile.social ? "" : profile.social.linkedIn);
      setYoutube(loading || !profile.social ? "" : profile.social.youtube);
      setInstagram(loading || !profile.social ? "" : profile.social.instagram);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, loading]);

  const formData = {
    company,
    website,
    location,
    status,
    skills,
    gitHubUsername,
    bio,
    twitter,
    facebook,
    linkedIn,
    youtube,
    instagram,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createProfile(formData, history, true));
  };

  return (
    <div>
      <h1 className="large text-primary">Edit Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={gitHubUsername}
            onChange={(e) => setGitHubUsername(e.target.value)}
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            onClick={() => setDisplaySocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <div>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x"></i>
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>
          </div>
        )}

        <button type="submit" className="btn btn-primary my-1">
          {" "}
          Submit
        </button>
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </div>
  );
};

export default EditProfile;
