import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const NoMatch = () => {
  return (
    <Container>
      <Row>
        <Col size="md-12">
        <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;