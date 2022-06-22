import React, { useEffect, useState } from "react";

// Library
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsPersonCircle, BsTelephoneFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import LogoIcon from "../../assets/img/logo/LogoIcon.svg";

// Assets
import LogoLong from "../../assets/img/logo/LogoLong.svg";
import useLocalstorage from "../../hooks/useLocalstorage";
import routes from "../../routes";

// Style
import style from "./style.module.css";

const Logo = () => {
  return (
    <>
      <div className={`${style.logoContainer} d-none d-lg-block`}>
        <img src={LogoLong} alt="SewaKantor" />
      </div>
      <div className={`${style.logoContainer} d-block d-lg-none`}>
        <img src={LogoIcon} alt="SewaKantor" />
      </div>
    </>
  );
};

const UserNavbar = () => {
  const { pathname } = useLocation();
  const { getLSValue, setLSValue, removeLSValue } = useLocalstorage();

  const [user, setUser] = useState("");

  useEffect(() => {
    const user = getLSValue("user");
    setUser(user);
  }, []);
  useEffect(() => {
    return () => {};
  }, [user]);

  const navigation = [
    {
      name: "Home",
      link: routes.home,
    },
    {
      name: "Discover",
      link: routes.discover,
    },
    {
      name: "Our location",
      link: routes.location,
    },
  ];

  return (
    <Navbar bg="skSmoke" expand="lg" color="skBlack" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${style.navmenuContainer} fw-bold`}
        >
          <Nav className="d-flex align-items-center">
            {navigation.map((nav, index) => (
              <Nav.Link
                key={index}
                href={nav.link}
                className={`${nav?.class && nav.class} ${
                  pathname.includes(nav.link) && "active"
                } fs-5`}
              >
                {nav.name}
              </Nav.Link>
            ))}
            <Nav.Link href={routes.contact} className="fs-5" title={`Contact`}>
              <BsTelephoneFill className="mr-2" size={24} />
            </Nav.Link>
            <div className={`${style.divider} mx-2`} />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <BsPersonCircle size={24} />
                  </a>

                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    {user ? (
                      <>
                        <li>
                          <div
                            className={`dropdown-header`}
                            role={`heading`}
                            aria-level={2}
                          >
                            {user.name}
                          </div>
                        </li>
                        <li>
                          <hr className={`dropdown-divider`} />
                        </li>
                        <li>
                          <Link to={routes.profile} className={`dropdown-item`}>
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link to={routes.booking} className={`dropdown-item`}>
                            Active booking
                          </Link>
                        </li>
                        <li>
                          <Link to={routes.chat} className={`dropdown-item`}>
                            Chat
                          </Link>
                        </li>

                        <li>
                          <hr className={`dropdown-divider`} />
                        </li>
                        <li>
                          <Link
                            to={routes.logout}
                            className={`dropdown-item`}
                            onClick={(e) => {
                              e.preventDefault();
                              removeLSValue(`user`);
                              setUser(null);
                            }}
                          >
                            Logout
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link
                            to={routes.login}
                            className={`dropdown-item`}
                            onClick={(e) => {
                              e.preventDefault();
                              setLSValue(`user`, {
                                id: 1,
                                name: "John Doe",
                              });
                              setUser(getLSValue("user"));
                            }}
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={routes.register}
                            className={`dropdown-item`}
                          >
                            Register
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;
