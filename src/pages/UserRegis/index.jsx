import React from "react";

//Hook
import useForm from "../../hooks/useForm";

//Function
import validate from "./validateInfo"

//style
import { Container, Col, Row, Form, Image, Button } from "react-bootstrap";
import style from "./style.module.css";
import logo from "../../assets/img/logo/LogoIcon.svg";
import { FcGoogle } from "react-icons/fc";

const UserRegis = () => {
  const { handleChange, values, handleSubmit,errors } = useForm(validate);
  
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <Image src={logo} thumbnail className={style.logo_image} />
          </div>
        </Col>
        <Col className={style.right_login}>
          <div>
            <Form>
              <Form.Group className={style.login_form} onSubmit={handleSubmit}>
                <h4>Start For Free</h4>
                <h1>Create New Account</h1>
                <h6>
                  Already have any account? <span>Login</span>
                </h6>
                <Row style={{ marginBottom: "20px" }}>
                  <Col>
                    <Form.Label
                      style={{ fontWeight: "bold" }}
                      htmlFor="firstname"
                    >
                      First Name
                    </Form.Label>
                    <Form.Control
                      id="firstname"
                      placeholder="Enter your first name"
                      type="text"
                      name="firstname"
                      className={style.input}
                      value={values.firstname}
                      onChange={handleChange}
                    />
                  </Col>
                  {errors.firstname && <p>{errors.firstname}</p>}
                  <Col>
                    <Form.Label
                      style={{ fontWeight: "bold" }}
                      htmlFor="lastname"
                    >
                      Last Name
                    </Form.Label>
                    <Form.Control
                      id="lastname"
                      name="lastname"
                      type="text"
                      placeholder="Enter your last name"
                      value={values.lastname}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group style={{ marginBottom: "20px" }}>
                <Form.Label style={{ fontWeight: "bold" }} htmlFor="email">
                  Email
                </Form.Label>
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
              </Form.Group>
              <Form.Group>
                <Row style={{ marginBottom: "20px" }}>
                  <Col>
                    <Form.Label
                      style={{ fontWeight: "bold" }}
                      htmlFor="password"
                    >
                      Password
                    </Form.Label>
                    <Form.Control
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={values.password}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Form.Label
                      style={{ fontWeight: "bold" }}
                      htmlFor="password2"
                    >
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      id="password2"
                      name="password2"
                      type="password"
                      placeholder="Retype your password"
                      value={values.password2}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Row>
                <Col>
                  <Button className={style.google_signup}>
                    <FcGoogle className={style.google_btn} />
                    Sign Up With Google
                  </Button>
                </Col>
                <Col>
                  <Button className={style.signup}>Sign Up </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserRegis;
