import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  // const auth = false; // replace with your authentication check
  const auth = localStorage.getItem("token");
  return auth != null ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;