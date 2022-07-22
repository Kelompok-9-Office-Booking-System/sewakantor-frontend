import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import routes from "../../routes";

const AdminBreadcrumb = () => {
  const location = useLocation();
  const [breadcrumb, setBreadcrumb] = useState([
    { name: "Home", link: routes.adminDashboard },
  ]);

  useEffect(() => {
    if (!location.pathname) {
      return;
    }
    const pathArray = location.pathname.split("/");
    let baseRoute = {};
    switch (pathArray[2]) {
      case "bookings":
        baseRoute = { name: "Bookings", link: routes.adminBookings };
        break;
      case "spaces":
        baseRoute = { name: "Spaces", link: routes.adminSpaces };
        break;
      case "users":
        baseRoute = { name: "Users", link: routes.adminUsers };
        break;
      case "reviews":
        baseRoute = { name: "Reviews", link: routes.adminReviews };
        break;
      case "managers":
        baseRoute = { name: "Admin office", link: routes.adminManagers };
        break;
      case "chat":
        baseRoute = { name: "Live chat", link: routes.adminLivechat };
        break;
    }
    let extraRoute = {};
    if (pathArray[3] === "add") {
      extraRoute = {
        name: `Add new ${baseRoute.name}`,
        link: `${baseRoute.link}/add`,
      };
    } else if (pathArray[3] === "edit") {
      extraRoute = { name: `Edit ${baseRoute.name}`, link: `#` };
    } else {
      extraRoute = { name: `${pathArray[3]}`, link: `#` };
    }

    if (pathArray.length === 3) {
      if (pathArray[2].toLowerCase() === "dashboard") {
        setBreadcrumb([{ name: "Home", link: routes.adminDashboard }]);
      } else {
        setBreadcrumb([
          { name: "Home", link: routes.adminDashboard },
          baseRoute,
        ]);
      }
    }
    console.log(baseRoute, extraRoute);
    if (pathArray.length >= 4) {
      setBreadcrumb([
        { name: "Home", link: routes.adminDashboard },
        baseRoute,
        extraRoute,
      ]);
    }
  }, [location]);

  return (
    <div
      className={`bg-skBlack text-skWhite d-flex align-items-center gap-2 p-2 px-4 `}
      style={{ borderRadius: "10px" }}
    >
      {breadcrumb.map((item, index) => {
        return (
          <div key={index} className={`d-flex align-items-center gap-2`}>
            <Link to={item.link} className={`text-decoration-none link-light`}>
              <span className={`text-nowrap`}>{item.name}</span>
            </Link>
            {index !== breadcrumb.length - 1 && <span>{">"}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default AdminBreadcrumb;
