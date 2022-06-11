import React from "react";

//style
import { Container, Col, Row } from "react-bootstrap";
import style from "./style.module.css"

//components
import LeftSide from "../../components/LeftSide";
import RightSide from "../../components/RightSide";

const UserRegis = () => {
  return (
    <Container>
      <Row>
        <Col>
          <LeftSide/>
        </Col>
        <Col className={style.right_login}>
          <RightSide/>
        </Col>
      </Row>
    </Container>
  );
};

export default UserRegis;
