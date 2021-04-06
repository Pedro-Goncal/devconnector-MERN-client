import axios from "axios";
import { URL } from "../../utils/Url";
import { setAlert } from "../actions/alertActions";

import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_POST,
  GET_POST,
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  REMOVE_COMMENT,
} from "../actions/constants";

//GET ALL POSTS
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/api/posts`);

    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//ADD LIKE
export const addLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`${URL}/api/posts/like/${postId}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: {
        postId,
        likes: res.data,
      },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//REMOVE LIKE
export const removeLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`${URL}/api/posts/unlike/${postId}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: {
        postId,
        likes: res.data,
      },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//DELETE POST
export const deletePost = (postId) => async (dispatch) => {
  if (window.confirm("Are you sure?")) {
    try {
      await axios.delete(`${URL}/api/posts/${postId}`);

      dispatch({
        type: DELETE_POST,
        payload: postId,
      });

      dispatch(setAlert("Post Removed", "success"));
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};

//ADD POST
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    const res = await axios.post(`${URL}/api/posts`, formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });

    dispatch(setAlert("Post Created", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//GET INDIVIDUAL POST
export const getPost = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/api/posts/${postId}`);

    dispatch({ type: GET_POST, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//ADD COMMENT
export const addComment = (postId, formData) => async (dispatch) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    const res = await axios.post(
      `${URL}/api/posts/comment/${postId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert("Comment Added", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//DELETE COMMENT
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await axios.delete(`${URL}/api/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });

    dispatch(setAlert("Comment Removed", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
