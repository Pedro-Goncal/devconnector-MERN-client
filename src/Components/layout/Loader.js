import Spinner from "react-spinkit";

const Loader = () => {
  return (
    <div
      className="loader"
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
      }}
    >
      <Spinner name="line-scale-party" color="goldenrod" />
    </div>
  );
};

export default Loader;
