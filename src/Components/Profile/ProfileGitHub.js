import { useEffect } from "react";
import PropTypes from "prop-types";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { getGithubRepos } from "../../redux/actions/profileActions";

//Components
import Loader from "../../Components/layout/Loader";

const ProfileGitHub = ({ username }) => {
  const dispatch = useDispatch();
  const { repos } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getGithubRepos(username));
  }, [dispatch, username]);

  return (
    <div className="profile-github">
      <h2 className="text-primary my-1"> Github Repos</h2>
      {repos === null ? (
        <Loader />
      ) : (
        repos.map((repo) => (
          <div key={repo._id} className="repo bg-white p-1 my-1">
            <div>
              <h4>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div>
              <ul>
                <li
                  className="badge badge-primary"
                  style={{ padding: "5px 8px" }}
                >
                  Stars: {repo.stargazers_count}
                </li>
                <li className="badge badge-dark" style={{ padding: "5px 8px" }}>
                  Watchers: {repo.watchers_count}
                </li>
                <li
                  className="badge badge-light"
                  style={{ padding: "5px 8px" }}
                >
                  Forks: {repo.forks_count}
                </li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileGitHub.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ProfileGitHub;
