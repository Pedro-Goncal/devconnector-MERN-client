import PropTypes from "prop-types";

//REDUX
import { useDispatch } from "react-redux";
import { deleteExperience } from "../../redux/actions/profileActions";

//MOMENT
import Moment from "react-moment";

const Experience = ({ experience }) => {
  const dispatch = useDispatch();

  const experiences = experience?.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
        {exp.to === null ? (
          " Now"
        ) : (
          <Moment format="DD/MM/YYYY">{exp.to}</Moment>
        )}
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteExperience(exp._id))}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div style={{ padding: "30px 0 0 0 " }}>
      <h2 className="my2">Experience</h2>
      <table className="table" style={{ padding: "30px 0" }}>
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>

        <tbody>{experiences}</tbody>
      </table>
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default Experience;
