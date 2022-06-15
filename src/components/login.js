import React from "react";
import { Form, Button, Col } from "react-bootstrap";

const Login = () => {
  return (
    <div className="row">
      <Col md={6}>
        <img src='google.com' alt='test' />
      </Col>

      <Col md={6} className="mb-4">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h5>Login</h5>
            <Form.Text className="text-muted d-block">
              Don't have any account?
            </Form.Text>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Text className="text-muted" textAlign='left'>
            Forget your password?
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <Button variant="primary" type="submit" className="d-inline" >
            Login wih google
          </Button>
          <div
            style={{
              borderLeft: '3px solid rgba(0, 0, 0, 0.2)',
              height: '60px',
              display: 'inline'
            }}
          />
          <Button variant="primary" type="submit" className="d-inline" >
            Login
          </Button>
        </Form>
      </Col>
    </div>
  );
}

export default Login;