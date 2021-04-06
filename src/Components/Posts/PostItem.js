import PropTypes from "prop-types";

//ROUTER
import { Link } from "react-router-dom";

//MOMENT
import Moment from "react-moment";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  addLike,
  removeLike,
  deletePost,
} from "../../redux/actions/postActions";

const PostItem = ({
  showActions = true,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      {" "}
      <div className="post bg-white p-1 my-1">
        <div>
          <Link to={`/profile/${user}`}>
            <img className="round-img" src={avatar} alt="" />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p className="my-1">{text}</p>
          <p className="post-date">
            Posted on <Moment format="DD/MM/YYYY">{date}</Moment>
          </p>

          {showActions && (
            <div>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => dispatch(addLike(_id))}
              >
                <i className="fas fa-thumbs-up"></i>
                {likes.length > 0 && (
                  <span className="likes-count" style={{ marginLeft: "5px" }}>
                    {likes.length}
                  </span>
                )}
              </button>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => dispatch(removeLike(_id))}
              >
                <i className="fas fa-thumbs-down"></i>
              </button>
              <Link to={`/post/${_id}`} className="btn btn-primary">
                Discussion
                {comments.length > 0 && (
                  <span className="comment-count" style={{ marginLeft: "5px" }}>
                    {comments.length}
                  </span>
                )}
              </Link>

              {!auth.loading && user === auth.user._id && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => dispatch(deletePost(_id))}
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostItem;
