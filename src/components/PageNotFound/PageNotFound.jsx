import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useUser from "../../hooks/useUser";

const PageNotFound = () => {
  const nav = useNavigate();
  const { user } = useUser();
  const { pathname } = useLocation();

  const routeIsPermitted = () => {
    const foundRoute = user.filteredRoutes?.find((route) => {
      return route.path === pathname;
    });

    return !!foundRoute;
  };

  useEffect(() => {
    if (!user.filteredRoutes) {
      return;
    }
    if (!routeIsPermitted()) {
      nav("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.filteredRoutes]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      404 page not found, <Link to="/">click here to go back home</Link>
    </div>
  );
};

export default PageNotFound;
