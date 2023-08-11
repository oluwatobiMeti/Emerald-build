import { useParams, useNavigate } from "react-router-dom";

const WithRouter = (WrappedComponent) => {
  function Wrapper(props) {
    const params = useParams();
    const navigate = useNavigate();

    return <WrappedComponent {...props} router={{ params, navigate }} />;
  }
  return Wrapper;
};

export default WithRouter;
