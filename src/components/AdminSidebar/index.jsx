import { useEffect, useState } from "react";
import { MdOutlineSpaceDashboard, MdGroups } from "react-icons/md";
import { BsPersonBadge, BsBookmark } from "react-icons/bs";
import { GoChevronRight } from "react-icons/go";
import { BiBuildingHouse } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/img/logo/LogoLong.svg";
import routes from "../../routes";
import style from "./style.module.css";

const DropdownMenu = ({
  state,
  setState,
  name,
  icon,
  routesView,
  routesAdd,
}) => {
  return (
    <div className={`d-flex flex-column`}> 
      <div
        className={`${style.menu}`}
        onClick={() => {
          if (state === name.toLowerCase()) {
            setState("dashboard");
          } else {
            setState(name.toLowerCase());
          }
        }}
      >
        <div
          className={`d-flex align-items-center justify-content-start text-skMidnight gap-3`}
        >
          {icon}
          <span className={style.textTab}>{name}</span>
        </div>
        <GoChevronRight
          size={32}
          className={`${style.chevron} ${
            state.toLowerCase() === name.toLowerCase() && style.active
          }`}
        />
      </div>
      <div
        className={`d-flex flex-column rounded-3 bg-skSmoke overflow-hidden ${
          style.menuTab
        } ${
          state.toLowerCase() === name.toLowerCase() ? style.open : style.close
        }`}
      >
        <Link
          to={routesView}
          className={`text-decoration-none ${style.menu} ps-5 link-dark ${style.menuChild}`}
        >
          View all {name.toLowerCase()}
        </Link>
        <Link
          to={routesAdd}
          className={`text-decoration-none ${style.menu} ps-5 link-dark ${style.menuChild}`}
        >
          Add new {name.toLowerCase()}
        </Link>
      </div>
    </div>
  );
};

const AdminSidebar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState("dashboard");
  const menu = [
    {
      name: "Bookings",
      icon: <BsPersonBadge className={style.icon} />,
      routesView: routes.adminBookings,
      routesAdd: routes.adminBookingsAdd,
    },
    {
      name: "Spaces",
      icon: <BiBuildingHouse className={style.icon} />,
      routesView: routes.adminSpaces,
      routesAdd: routes.adminSpacesAdd,
    },
    {
      name: "Users",
      icon: <MdGroups className={style.icon} />,
      routesView: routes.adminUsers,
      routesAdd: routes.adminUsersAdd,
    },
    {
      name: "Reviews",
      icon: <BsBookmark className={style.icon} />,
      routesView: routes.adminReviews,
      routesAdd: routes.adminReviewsAdd,
    },
    {
      name: "Admin office",
      icon: <MdGroups className={style.icon} />,
      routesView: routes.adminManagers,
      routesAdd: routes.adminManagersAdd,
    },
  ];
  useEffect(() => {
    if (location.pathname.includes("admin/bookings")) {
      setOpenMenu("bookings");
    } else if (location.pathname.includes("admin/spaces")) {
      setOpenMenu("spaces");
    } else if (location.pathname.includes("admin/users")) {
      setOpenMenu("users");
    } else if (location.pathname.includes("admin/reviews")) {
      setOpenMenu("reviews");
    } else if (location.pathname.includes("admin/managers")) {
      setOpenMenu("admin office");
    } else {
      setOpenMenu("dashboard");
    }
  }, [location]);

  return (
    <div className={`${style.sidebarContainer}`}>
      <img src={Logo} alt="SewaKantor" className={style.imgLogo} />
      <div className={style.menuContainer}>
        <Link
          to={routes.adminDashboard}
          className={`text-decoration-none ${style.menu}`}
        >
          <div
            className={`d-flex align-items-center justify-content-start text-skMidnight gap-3`}
          >
            <MdOutlineSpaceDashboard className={style.icon} />
            <span className={style.textTab}>Dashboard</span>
          </div>
        </Link>

        {menu.map((item, index) => (
          <DropdownMenu
            key={index}
            state={openMenu}
            setState={setOpenMenu}
            name={item.name}
            icon={item.icon}
            routesView={item.routesView}
            routesAdd={item.routesAdd}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
