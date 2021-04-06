import PropTypes from "prop-types";

//REDUX
import { useDispatch } from "react-redux";
import { deleteEducation } from "../../redux/actions/profileActions";

//MOMENT
import Moment from "react-moment";

const Education = ({ education }) => {
  const dispatch = useDispatch();

  const educations = education?.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className="hide-sm">{edu.degree}</td>
      <td>
        <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
        {edu.to === null ? (
          " Now"
        ) : (
          <Moment format="DD/MM/YYYY">{edu.to}</Moment>
        )}
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteEducation(edu._id))}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div style={{ padding: "30px 0 0 0" }}>
      <h2 className="my2">Education</h2>
      <table className="table" style={{ padding: "30px 0" }}>
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>

        <tbody>{educations}</tbody>
      </table>
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

export default Education;
