import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import style from "./style.module.css";

const RightSide = () => {
  return (
    <div>
      <Form>
        <Form.Group className={style.login_form}>
          <h4>Start For Free</h4>
          <h1>Create New Account</h1>
          <h6>
            Already have any account? <span>Login</span>
          </h6>
          <Row style={{ marginBottom: "20px" }}>
            <Col>
              <Form.Label style={{ fontWeight: "bold" }}>First Name</Form.Label>
              <Form.Control placeholder="Enter your first name" />
            </Col>
            <Col>
              <Form.Label style={{ fontWeight: "bold" }}>Last Name</Form.Label>
              <Form.Control placeholder="Enter your last name" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group style={{ marginBottom: "20px" }}>
          <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
          <Form.Control placeholder="Enter your email" />
        </Form.Group>
        <Form.Group>
          <Row style={{ marginBottom: "20px" }}>
            <Col>
              <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
              <Form.Control placeholder="Enter your password" />
            </Col>
            <Col>
              <Form.Label style={{ fontWeight: "bold" }}>
                Confirm Password
              </Form.Label>
              <Form.Control placeholder="Retype your password" />
            </Col>
          </Row>
        </Form.Group>
        <Row>
          <Col>
            <Button className={style.google_signup}>Sign Up With Google</Button>
          </Col>
          <Col>
            <Button className={style.signup}>Sign Up </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default RightSide;
