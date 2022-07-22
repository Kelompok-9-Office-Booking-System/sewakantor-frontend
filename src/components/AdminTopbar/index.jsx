import { Fragment, useCallback, useEffect, useState } from "react";
import { Image, Nav, Form } from "react-bootstrap";
import { BsBellFill, BsEnvelopeFill, BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Swal from "sweetalert2";
import useStoreAuth from "../../hooks/store/useStoreAuth.js";
import routes from "../../routes";
import { decrypt } from "../../utils/encryption.js";
import mockNotif from "../AdminContentContainer/mockNotif";
import style from "./style.module.css";

const AdminTopbar = () => {
  const navigate = useNavigate();
  const mock = true;
  const maxNotification = 3;
  const maxMessage = 4;
  const authData = decrypt(useStoreAuth((state) => state.authData));
  const authLogout = useStoreAuth((state) => state.fnLogout);

  const [notificationList, setNotificationList] = useState([]);
  const [isNotificationMore, setIsNotificationMore] = useState(false);

  const [messageList, setMessageList] = useState([]);
  const [isMessageMore, setIsMessageMore] = useState(false);

  //TODO: Fetch from localstorage
  const userAvatar = "https://avatar.oxro.io/avatar.svg?name=Lorem&length=1";

  const handleLogout = useCallback(async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Logout",
      text: "Are you sure want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value) {
        authLogout();
        Swal.fire({
          title: "Logout",
          text: "You have been logged out",
          icon: "success",
          timer: 1000,
          timerProgressBar: true,
        });
        navigate(routes.adminLogin);
      }
    });
  }, []);

  const userMenu = [{ label: "logout" }];

  useEffect(() => {
    if (mock) {
      const mockNotification = mockNotif;
      setNotificationList(mockNotification);
      // setMessageList(mockNotification);
    }
    if (notificationList.length > maxNotification) {
      setIsNotificationMore(true);
    } else {
      setIsNotificationMore(false);
    }
  }, []);

  return (
    <Navbar expand="lg" className={`${style.navbar}`}>
      <Nav
        className={`d-flex align-items-center justify-content-between w-100`}
      >
        <div className={`position-relative d-flex align-items-center`}>
          <BsSearch size={24} className={`${style.searchIcon}`} />
          <Form.Control
            className={`${style.searchInput}`}
            type="text"
            placeholder="Search for..."
          />
        </div>
        <div className={`d-flex align-items-center gap-3`}>
          {/* Notification */}
          <div className="collapse navbar-collapse" id="notificationDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle position-relative"
                  href="#"
                  id="notificationDropdownContent"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsBellFill size={24} />
                  {notificationList.length > 0 && (
                    <span className={`${style.notificationCount}`}>
                      {notificationList.length}
                    </span>
                  )}
                </a>

                <ul
                  className="dropdown-menu p-3 dropdown-menu-end"
                  aria-labelledby="notificationDropdownContent"
                  style={{ width: "25rem" }}
                >
                  {notificationList.map((notification, index) => {
                    if (index < maxNotification) {
                      return (
                        <Fragment key={index}>
                          <li key={index}>
                            <span className={style.notificationTitle}>
                              {notification.title}
                            </span>
                            <p className={style.notificationMessage}>
                              {notification.message}
                            </p>
                          </li>
                          <hr className={`dropdown-divider`} />
                        </Fragment>
                      );
                    }
                  })}
                  {isNotificationMore && (
                    <li
                      className={`w-100 d-flex flex-column align-items-center justify-content-center`}
                    >
                      <span
                        className={style.notificationTitle}
                        style={{ margin: 0 }}
                      >
                        More Notifications
                      </span>
                      <p
                        className={style.notificationMessage}
                        style={{ margin: 0 }}
                      >
                        {notificationList.length - maxNotification} more
                        notifications
                      </p>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </div>

          {/* Message */}
          <div className="collapse navbar-collapse" id="messageDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link position-relative"
                  href="#"
                  id="messageDropdownContent"
                  role="button"
                  // data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(routes.adminLivechat);
                  }}
                >
                  <BsEnvelopeFill size={24} />
                  {messageList.length > 0 && (
                    <span className={`${style.notificationCount}`}>
                      {messageList.length}
                    </span>
                  )}
                </a>

                <ul
                  className="dropdown-menu dropdown-menu-end p-3"
                  aria-labelledby="messageDropdownContent"
                  style={{ width: "25rem" }}
                >
                  {messageList.map((msg, index) => {
                    if (index < maxMessage) {
                      return (
                        <Fragment key={index}>
                          <li
                            key={index}
                            className={`d-flex align-items-center justify-content-center gap-3`}
                          >
                            <Image
                              src={userAvatar}
                              alt={"Avatar"}
                              roundedCircle
                              className={style.messageAvatar}
                            />
                            <div>
                              <span className={style.notificationTitle}>
                                {msg.title}
                              </span>
                              <p className={style.notificationMessage}>
                                {msg.message}
                              </p>
                            </div>
                          </li>
                          <hr className={`dropdown-divider`} />
                        </Fragment>
                      );
                    }
                  })}
                  {isMessageMore && (
                    <li
                      className={`w-100 d-flex flex-column align-items-center justify-content-center`}
                    >
                      <span
                        className={style.notificationTitle}
                        style={{ margin: 0 }}
                      >
                        More Messages
                      </span>
                      <p
                        className={style.notificationMessage}
                        style={{ margin: 0 }}
                      >
                        {messageList.length - maxMessage} more messages
                      </p>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </div>

          {/* Divider */}
          <div className={style.divider} />

          {/* User */}
          <div className="collapse navbar-collapse" id="userDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle position-relative d-flex gap-3 align-items-center"
                  href="#"
                  id="userDropdownContent"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Image
                    src={authData.avatar || userAvatar}
                    alt={authData.fullName}
                    roundedCircle
                    className={style.userAvatar}
                  />
                  <span className={style.userName}>{authData.fullName}</span>
                </a>

                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="userDropdownContent"
                >
                  {userMenu.map((menu, index) => (
                    <li key={index}>
                      <div
                        className={`dropdown-item`}
                        onClick={handleLogout}
                        style={{ cursor: "pointer" }}
                      >
                        {menu.label}
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    </Navbar>
  );
};

export default AdminTopbar;
