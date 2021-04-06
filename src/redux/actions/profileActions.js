import axios from "axios";
import { setAlert } from "../actions/alertActions";
import { URL } from "../../utils/Url";

import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  ACCOUNT_DELETED,
  CLEAR_PROFILE,
  GET_PROFILES,
  GET_REPOS,
} from "../actions/constants";

//GET CURRENT PROFILE
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/api/profile/me`);

    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//GET ALL PROFILES
export const getProfiles = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get(`${URL}/api/profile`);

    dispatch({ type: GET_PROFILES, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//GET ALL PROFILE BY ID
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/api/profile/user/${userId}`);

    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//GET GIT HUB REPOS
export const getGithubRepos = (username) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/api/profile/github/${username}`);

    dispatch({ type: GET_REPOS, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//CREATE OR UPDATE PROFILE_ERROR
export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(`${URL}/api/profile`, formData, config);

    dispatch({ type: GET_PROFILE, payload: res.data });
    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//ADD EXPERIENCE
export const addExperience = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `${URL}/api/profile/experience`,
      formData,
      config
    );

    dispatch({ type: UPDATE_PROFILE, payload: res.data });
    dispatch(setAlert("Experience added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

//ADD EDUCATION
export const addEducation = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `${URL}/api/profile/education`,
      formData,
      config
    );

    dispatch({ type: UPDATE_PROFILE, payload: res.data });
    dispatch(setAlert("Education added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

//DELETE EXPERIENCE
export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${URL}/api/profile/experience/${id}`);

    dispatch({ type: UPDATE_PROFILE, payload: res.data });
    dispatch(setAlert("Experience removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//DELETE EDUCATION
export const deleteEducation = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${URL}/api/profile/education/${id}`);

    dispatch({ type: UPDATE_PROFILE, payload: res.data });
    dispatch(setAlert("Education removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//DELETE ACCOUNT AND PROFILE
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure? This cannot be undone")) {
    try {
      await axios.delete(`${URL}/api/profile`);

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert("Your accout has been permanantly deleted"));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
