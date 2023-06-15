import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoute