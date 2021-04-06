import { useState } from "react";

//ROUTER
import { Link } from "react-router-dom";

//REDUX
import { useDispatch } from "react-redux";
import { addExperience } from "../../redux/actions/profileActions";

const AddExperience = ({ history }) => {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [current, setCurrent] = useState(false);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const formData = {
    company,
    title,
    location,
    from,
    to,
    current,
    description,
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addExperience(formData, history));
  };

  return (
    <div>
      <h1 className="large text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Job Title"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Company"
            name="company"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
            Current Job
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
            placeholder="Job Description"
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

export default AddExperience;
