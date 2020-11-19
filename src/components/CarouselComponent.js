import React from 'react';
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import carimgs from "../shared/carimgs";

const MainCarousel = ()  => (
    <Row className="mid">
    <Col md="8" className="mx-auto">
      <UncontrolledCarousel items={carimgs} />
    </Col>
    </Row>
);

export default MainCarousel;