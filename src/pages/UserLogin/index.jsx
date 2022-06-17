import React, { useState} from "react";
import { Form, Button, Col } from "react-bootstrap";
import style from "./style.module.css"

function UserLogin () {
  const email = useFormInput('');
  const password = useFormInput('');

function handleSubmit(){
  console.log("jalan", email.value, password.value); 
}

  return (
    <Row className="row">
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
            <Form.Control type="email" {...email}  placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" {...password} placeholder="Password" />
          </Form.Group>
          <Form.Text className="text-muted" textAlign='left'>
            Forget your password?
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <Button variant="primary" className="d-inline" >
            Login wih google
          </Button>
          <div className={style.line}
          />
          <Button variant="primary" className="d-inline" onClick={handleSubmit}>
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default UserLogin;