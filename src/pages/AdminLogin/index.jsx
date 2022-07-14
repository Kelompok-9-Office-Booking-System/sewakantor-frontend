import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import style from "./style.module.css"
import { Navigate } from "react-router-dom";
import {  toast } from 'react-toastify';

import apiAdmin from "../../api/apiAdmin";
import setAuthorHeader from "../../configs/axios/setAuthorHeader";
import useLocalstorage from "../../hooks/useLocalstorage";


function AdminLogin() {
  const email = useFormInput('');
  const password = useFormInput('');
  const [data, setData] = useState("")

  console.log(data)

  const handleTest = async ()=> {
    try {
      // const resAllPost = await apiCustomer.getAllPosts()
      // const resPost = await apiCustomer.getPostById(2)
      // const resComment = await apiCustomer.getCommentPostById(1)
      const resComment = await apiAdmin.getCommentByPostId(1)
      setData(resComment)

      
    } catch (error) {
      
    }
  }

  const handleSubmit = async () =>  {
    try {
      const payload = {
        email : email.value,
        password: password.value
      }
      console.log("jalan", email.value, password.value);
  
      const responseLogin = await apiAdmin.login(payload)
      if(responseLogin.code === 200) {
        // teruskan ke halaman landing page
        // <Navigate to="/" replace={true} />
        console.log("login",responseLogin)
        setAuthorHeader(responseLogin.data.token)
        useLocalstorage.setLSValue(role,value)
        toast(responseLogin.message)
      } else {
        //  <Navigate to="/" replace={true} />

      }
    } catch (error) {
      console.log("error", error)
    }
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
            <Form.Control type="email" {...email} placeholder="Enter email" />
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

export default AdminLogin;