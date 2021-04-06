import { useState } from "react";

//ROUTER
import { Link } from "react-router-dom";

//REDUX
import { useDispatch } from "react-redux";
import { addEducation } from "../../redux/actions/profileActions";

const AddEducation = ({ history }) => {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [current, setCurrent] = useState(false);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const formData = {
    school,
    degree,
    fieldOfStudy,
    from,
    to,
    current,
    description,
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addEducation(formData, history));
  };

  return (
    <div>
      <h1 className="large text-primary">Add Your Education</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any school or bootcamp that
        you have attended
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or bootcamp"
            name="school"
            required
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree"
            name="degree"
            required
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Field of Study"
            name="fieldOfStudy"
            value={fieldOfStudy}
            onChange={(e) => setFieldOfStudy(e.target.value)}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              value={current}
              checked={current}
              onChange={(e) => setCurrent(!current)}
            />{" "}
            Current
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            disabled={current ? "disabled" : ""}
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
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

export default AddEducation;
