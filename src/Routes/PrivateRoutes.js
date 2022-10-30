import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import RiseLoader from "react-spinners/ClipLoader";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div>
        <div className="loader flex justify-center align-middle">
          <RiseLoader
            color={"#36d7b7"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
          />
        </div>
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
