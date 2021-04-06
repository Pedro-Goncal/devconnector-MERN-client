import { useEffect } from "react";

//ROUTER
import { Link } from "react-router-dom";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/actions/postActions";

//COMPONENTS
import Loader from "../../Components/layout/Loader";
import PostItem from "../Posts/PostItem";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const Post = ({ match }) => {
  const dispatch = useDispatch();
  const { post, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost(match.params.id));
  }, [dispatch, match.params.id]);

  return loading || post === null ? (
    <Loader />
  ) : (
    <div>
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />{" "}
      <CommentForm postId={post._id} />
      <div className="comments">
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </div>
  );
};

export default Post;
