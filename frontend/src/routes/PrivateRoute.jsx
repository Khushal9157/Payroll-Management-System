import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ children, roles }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;

  const user = jwtDecode(token);
  if (roles && !roles.includes(user.role)) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;
