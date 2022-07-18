import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import ReactLoading from "react-loading";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useStoreAuth from "../../hooks/store/useStoreAuth.js";
import useFetch from "../../hooks/useFetch.js";
import routes from "../../routes.js";
import { encrypt } from "../../utils/encryption.js";

import style from "./style.module.css";

const UserRegis = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isLoginDisable, setIsLoginDisable] = useState(true);
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const loginFunction = useStoreAuth((state) => state.fnLogin);

  useEffect(() => {
    if (formValue.email.length > 0 && formValue.password.length > 0) {
      setIsLoginDisable(false);
    } else {
      setIsLoginDisable(true);
    }
  }, [formValue]);

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setFormValue({ ...formValue, [name]: value });
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
  const handleLogin = useCallback(
    async (e) => {
      function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      e.preventDefault();
      setIsLoginLoading(true);
      setIsLoginDisable(true);
      try {
        const bodyPayload = {
          email: formValue.email,
          password: formValue.password,
        };
        const data = await useFetch(
          "/customer/auth/login",
          {
            data: bodyPayload,
          },
          "POST"
        );

        setIsLoginLoading(false);
        setIsLoginDisable(false);
        if (data.code === 200) {
          Swal.fire({
            title: "Success",
            text: "Login success.\nRedirecting in 3 seconds",
            icon: "success",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          }).then(() => {
            const dataToEncrypt = {
              fullName: `${capitalize(data.data.firstName)} ${capitalize(
                data.data.lastName
              )}`,
              email: data.data.email,
              password: formValue.password,
              role: data.data.role,
              token: data.data.token,
            };
            loginFunction(
              encrypt(dataToEncrypt),
              encrypt(data.data.role),
              encrypt(data.data.token)
            );
            navigate(routes.home);
          });
        }
      } catch (error) {
        await Swal.fire({
          title: "Error",
          text: error,
          icon: "error",
        });
        setIsLoginLoading(false);
        setIsLoginDisable(false);
      }
    },
    [formValue, loginFunction]
  );

  return (
    <div className={`${style.loginContainer} bg-skSmoke`}>
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
                <h1>Login</h1>
                <h6 style={{ marginBottom: "1rem" }}>
                  Don't have any account?{" "}
                  <Link to={routes.register}>Register</Link>
                </h6>
              </div>
              <Form>
                <Col className={style.loginForm}>
                  <Col className={style.formSection}>
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Email
                    </Form.Label>
                    <Form.Control
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formValue.email}
                      onChange={handleInputChange}
                    />
                  </Col>

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
                  </Col>
                  <Row className={`my-3`}>
                    <Col>
                      <Button
                        type={"submit"}
                        variant={"dark"}
                        className={style.signup}
                        disabled={isLoginDisable}
                        onClick={handleLogin}
                      >
                        {isLoginLoading ? (
                          <ReactLoading
                            type={"bubbles"}
                            color={"white"}
                            width={24}
                            height={24}
                          />
                        ) : (
                          "Login"
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
