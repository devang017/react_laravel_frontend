import { Container, Row, Col, Button, Card } from "react-bootstrap";

function Welcome() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">
                Welcome to <span className="text-primary">DevShop</span>
              </h1>

              <p className="lead text-muted mt-3">
                Build fast, secure, and scalable web applications using
                React, Laravel, Bootstrap, and REST APIs.
              </p>

              <div className="mt-4">
                <Button variant="primary" size="lg" className="me-3">
                  Get Started
                </Button>

                <Button variant="outline-primary" size="lg">
                  Learn More
                </Button>
              </div>
            </Col>

            <Col md={6} className="text-center">
              <img
                src="https://placehold.co/600x400?text=React+%2B+Laravel"
                alt="Hero"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Why Choose Us?</h2>

          <Row>
            <Col md={4}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="text-center">
                  <Card.Title>Fast Development</Card.Title>
                  <Card.Text>
                    Build modern applications quickly using reusable React
                    components and Laravel APIs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="text-center">
                  <Card.Title>Secure Backend</Card.Title>
                  <Card.Text>
                    Powerful Laravel backend with authentication,
                    authorization, and REST APIs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="text-center">
                  <Card.Title>Responsive Design</Card.Title>
                  <Card.Text>
                    Fully responsive layouts that work perfectly on desktop,
                    tablet, and mobile devices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics */}
      <section className="bg-primary text-white py-5">
        <Container>
          <Row className="text-center">
            <Col md={3}>
              <h2>500+</h2>
              <p>Projects</p>
            </Col>

            <Col md={3}>
              <h2>150+</h2>
              <p>Clients</p>
            </Col>

            <Col md={3}>
              <h2>10+</h2>
              <p>Years Experience</p>
            </Col>

            <Col md={3}>
              <h2>24/7</h2>
              <p>Support</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5">
        <Container className="text-center">
          <h2>Ready to Build Your Next Project?</h2>

          <p className="text-muted">
            Let's create something amazing together using React and Laravel.
          </p>

          <Button variant="primary" size="lg">
            Contact Us
          </Button>
        </Container>
      </section>
    </>
  );
}

export default Welcome;