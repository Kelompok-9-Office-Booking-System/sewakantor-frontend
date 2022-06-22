import { useLocation } from "react-router-dom";
import routes from "../../routes";
import useLocalstorage from "../../hooks/useLocalstorage";

// Assets
import LogoLong from "../../assets/img/logo/LogoLong.svg";
import LogoIcon from "../../assets/img/logo/LogoIcon.svg";

// Library
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BsPersonCircle, BsTelephoneFill } from "react-icons/bs";

// Style
import style from "./style.module.css";
import React, { useEffect, useState } from "react";

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
            <NavDropdown title={<BsPersonCircle size={24} />}>
              {user ? (
                <>
                  <NavDropdown.Item href={routes.profile}>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href={routes.booking}>
                    Active bookings
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href={routes.logout}
                    onClick={(e) => {
                      e.preventDefault();
                      removeLSValue("user");
                      setUser(getLSValue("user"));
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item
                    href={routes.login}
                    onClick={(e) => {
                      e.preventDefault();
                      setLSValue("user", { id: 1, name: "John Doe" });
                      setUser(getLSValue("user"));
                    }}
                  >
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item href={routes.register}>
                    Register
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;
