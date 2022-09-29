import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "hooks/useAuth";

const RequiredAuth = () => {
  const { auth, isLoading } = useAuth();
  const location = useLocation();

  return isLoading ? (
    auth ? (
      <Outlet />
    ) : (
      <Navigate to={"/login"} state={{ from: location }} replace />
    )
  ) : null;
};

export default RequiredAuth;
