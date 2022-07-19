import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { FcGoogle } from "react-icons/fc";
import ReactLoading from "react-loading";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useFetch from "../../hooks/useFetch.js";
import routes from "../../routes.js";

import style from "./style.module.css";

const InputError = ({ error }) => {
  return (
    <span
      className={`position-absolute ${
        error.length > 0
          ? `opacity-100 ${style.errorShow}`
          : `opacity-0 ${style.errorHide}`
      }`}
    >
      {error ? error : ":p"}
    </span>
  );
};

const UserRegis = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isSignupDisable, setIsSignupDisable] = useState(true);
  const [isSignupLoading, setIsSignupLoading] = useState(false);

  // Validation
  const NAME_REGEX = /^[a-zA-Z]+$/;
  const EMAIL_REGEX =
    /^[a-zA-Z\d.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z\d](?:[a-zA-Z\d-]{0,61}[a-zA-Z\d])?(?:\.[a-zA-Z\d](?:[a-zA-Z\d-]{0,61}[a-zA-Z\d])?)*$/;
  const PASSWORD_REGEX = /^(?=.*?[a-zA-Z])(?=.*?[\d#?!@$ %^&*-]).{8,}$/;

  useEffect(() => {
    if (
      formValue.firstName.length > 0 &&
      formValue.lastName.length > 0 &&
      formValue.email.length > 0 &&
      formValue.password.length > 0 &&
      formValue.confirmPassword.length > 0 &&
      formErrors.firstName.length === 0 &&
      formErrors.lastName.length === 0 &&
      formErrors.email.length === 0 &&
      formErrors.password.length === 0 &&
      formErrors.confirmPassword.length === 0
    ) {
      setIsSignupDisable(false);
    } else {
      setIsSignupDisable(true);
    }
  }, [formValue, formErrors]);

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      // Validation
      switch (name) {
        case "firstName":
          if (!NAME_REGEX.test(value)) {
            setFormErrors({
              ...formErrors,
              firstName: "First name must be alphabetical",
            });
          } else {
            setFormErrors({
              ...formErrors,
              firstName: "",
            });
          }
          break;
        case "lastName":
          if (!NAME_REGEX.test(value)) {
            setFormErrors({
              ...formErrors,
              lastName: "Last name must be alphabetical",
            });
          } else {
            setFormErrors({
              ...formErrors,
              lastName: "",
            });
          }
          break;
        case "email":
          if (!EMAIL_REGEX.test(value)) {
            setFormErrors({
              ...formErrors,
              email: "Email invalid",
            });
          } else {
            setFormErrors({
              ...formErrors,
              email: "",
            });
          }
          break;
        case "password":
          if (value.length < 8) {
            setFormErrors({
              ...formErrors,
              password: "Password must be at least 8 characters long",
            });
          } else if (!PASSWORD_REGEX.test(value)) {
            setFormErrors({
              ...formErrors,
              password: "Password must contain letter, and number or symbol",
            });
          } else {
            setFormErrors({
              ...formErrors,
              password: "",
            });
          }
          break;
        case "confirmPassword":
          if (value !== formValue.password) {
            setFormErrors({
              ...formErrors,
              confirmPassword: "Password must match",
            });
          } else {
            setFormErrors({
              ...formErrors,
              confirmPassword: "",
            });
          }
          break;
        default:
          break;
      }

      setFormValue({
        ...formValue,
        [name]: value,
      });
    },
    [formValue]
  );
  const handleShowPassword = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsPasswordShown(!isPasswordShown);
    },
    [isPasswordShown]
  );
  const handleSignup = useCallback(
    async (e) => {
      function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      e.preventDefault();
      setIsSignupLoading(true);
      setIsSignupDisable(true);
      try {
        const bodyPayload = {
          firstName: capitalize(formValue.firstName),
          lastName: capitalize(formValue.lastName),
          email: formValue.email,
          password: formValue.password,
        };
        const data = await useFetch(
          "/customer/auth/register",
          {
            data: bodyPayload,
          },
          "POST"
        );

        if (data.code === 200) {
          Swal.fire({
            title: "Success",
            text: "You have successfully registered",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#00BCD4",
            showCancelButton: false,
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/login");
            }
          });
        }
        setIsSignupLoading(false);
        setIsSignupDisable(false);
      } catch (error) {
        await Swal.fire({
          title: "Error",
          text: error,
          icon: "error",
        });
        setIsSignupLoading(false);
        setIsSignupDisable(false);
      }
    },
    [formValue, formErrors, isSignupLoading, isSignupDisable]
  );
  const handleGoogle = useCallback(async (e) => {
    e.preventDefault();
    //Swal fire error
    await Swal.fire({
      title: "Error",
      text: "Google login is not available yet",
      icon: "error",
    });
  }, []);

  return (
    <div className={`${style.registerContainer} bg-skSmoke`}>
      <Container className={`h-100 d-flex w-100`}>
        <Row
          className={`h-100 w-100 d-flex align-items-center justify-content-between`}
        >
          <Col>
            <div>
              <img
                src={"/logoIcon.svg"}
                className={style.logoImage}
                alt="Sewakantor"
              />
            </div>
          </Col>
          <Col>
            <div>
              <div className={style.loginForm}>
                <h4>Start For Free</h4>
                <h1>Create New Account</h1>
                <h6 style={{ marginBottom: "1rem" }}>
                  Already have any account?{" "}
                  <Link to={routes.login} className={`fw-bold`}>
                    Login
                  </Link>
                </h6>
              </div>
              <Form>
                <Col className={style.loginForm}>
                  {/* Name input */}
                  <Row>
                    <Col className={style.formSection}>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        First Name
                      </Form.Label>
                      <Form.Control
                        id="firstName"
                        placeholder="Enter your first name"
                        type="text"
                        name="firstName"
                        value={formValue.firstName}
                        onChange={handleInputChange}
                      />
                      <InputError error={formErrors.firstName} />
                    </Col>

                    <Col className={style.formSection}>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Last Name
                      </Form.Label>
                      <Form.Control
                        id="lastName"
                        placeholder="Enter your last name"
                        type="text"
                        name="lastName"
                        value={formValue.lastName}
                        onChange={handleInputChange}
                      />
                      <InputError error={formErrors.lastName} />
                    </Col>
                  </Row>
                  {/* Email */}
                  <Row>
                    <Col className={style.formSection}>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Email
                      </Form.Label>
                      <Form.Control
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                        name="email"
                        value={formValue.email}
                        onChange={handleInputChange}
                      />
                      <InputError error={formErrors.email} />
                    </Col>
                  </Row>
                  {/* Password */}
                  <Row>
                    <Col className={style.formSection}>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Password
                      </Form.Label>
                      <Col
                        className={`${style.inputPasswordWrapper} position-relative`}
                      >
                        <Form.Control
                          id="password"
                          name="password"
                          type={isPasswordShown ? "text" : "password"}
                          placeholder="Enter your password"
                          value={formValue.password}
                          onChange={handleInputChange}
                          className={style.passwordField}
                        />
                        <button
                          type={"button"}
                          className={style.passwordBtn}
                          onClick={(e) => {
                            e.preventDefault();
                            handleShowPassword(e);
                          }}
                          tabIndex={-1}
                        >
                          {isPasswordShown ? (
                            <AiOutlineEyeInvisible />
                          ) : (
                            <AiOutlineEye />
                          )}
                        </button>
                      </Col>

                      <InputError error={formErrors.password} />
                    </Col>
                    <Col className={style.formSection}>
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Confirm Password
                      </Form.Label>
                      <Form.Control
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Retype your password"
                        value={formValue.confirmPassword}
                        onChange={handleInputChange}
                      />
                      <InputError error={formErrors.confirmPassword} />
                    </Col>
                  </Row>

                  <Row className={`my-3`}>
                    <Col>
                      <Button
                        variant={`outline-dark`}
                        className={style.googleSignup}
                        onClick={handleGoogle}
                      >
                        <FcGoogle className={style.googleBtn} />
                        Sign Up With Google
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        type={`submit`}
                        variant={`dark`}
                        className={style.signup}
                        disabled={isSignupDisable}
                        onClick={handleSignup}
                      >
                        {isSignupLoading ? (
                          <ReactLoading
                            type={"bubbles"}
                            color={"white"}
                            width={24}
                            height={24}
                          />
                        ) : (
                          "Sign Up"
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default UserRegis;
