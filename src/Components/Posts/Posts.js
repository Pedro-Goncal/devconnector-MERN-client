import { useEffect } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/postActions";

//COMPONENTS
import Loader from "../../Components/layout/Loader";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const Posts = () => {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="large text-primary">Posts</h1>
          <p className="lead">
            <i className="fas fa-user" /> Welcome to the comunity
          </p>
          <PostForm />

          <div className="posts">
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
