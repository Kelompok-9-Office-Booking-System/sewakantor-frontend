import React from 'react'
import "./style.module.css"
import { Row, Col, Button } from "react-bootstrap";
import style from "./style.module.css";

function Index() {
  return (
    <form className={`${style.contactForm}`}>

      <Row>
        <Col className={`d-flex flex-column`}>
          <label className={`${style.contactLabel}`}>First Name</label>
          <input
            className={`${style.contactInput}`}
            type="text"
            required={true}
          />
        </Col>
        <Col className={`d-flex flex-column`}>
          <label className={`${style.contactLabel}`}>Last Name</label>
          <input
            className={`${style.contactInput}`}
            type="text"
            required={true}
          />
        </Col>
        </Row>
        <Row>
        <Col className={`d-flex flex-column`}>
          <label className={`${style.contactLabel}`}>Space Name</label>
          <input
            className={`${style.contactInput}`}
            type="text"
            required={true}
          />
        </Col>
        <Col className={`d-flex flex-column`}>
          <label className={`${style.contactLabel}`}>Unit Name</label>
          <input
            className={`${style.contactInput}`}
            type="text"
            required={true}
          />
        </Col>
      </Row>
      <Row>
        <Col className={`d-flex flex-column`}>
          <label className={`${style.contactLabel}`}>Space describe</label>
          <textarea
            className={`${style.contactTextarea}`}
            required={true}
          />
        </Col>
      </Row>
      <Button className={`btn btn-dark flex-row${style.contactButton}`} >
        Submit
      </Button>
      <Button className={`btn btn-warning flex-row${style.contactButton}`}>
        Cancel
      </Button>
    </form>
)}

export default Index