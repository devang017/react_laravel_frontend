import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container className="py-5">
        <Row>

          {/* Company */}
          <Col md={4} className="mb-4">
            <h3 className="fw-bold text-primary">DevShop</h3>

            <p className="text-light">
              We build modern web applications using React, Laravel, and
              Bootstrap with clean and scalable architecture.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={2} className="mb-4">
            <h5 className="mb-3">Quick Links</h5>

            <Nav className="flex-column">
              <Nav.Link href="/" className="text-light p-0 mb-2">
                Home
              </Nav.Link>

              <Nav.Link href="/products" className="text-light p-0 mb-2">
                Products
              </Nav.Link>

              <Nav.Link href="/about" className="text-light p-0 mb-2">
                About
              </Nav.Link>

              <Nav.Link href="/contact" className="text-light p-0">
                Contact
              </Nav.Link>
            </Nav>
          </Col>

          {/* Services */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3">Services</h5>

            <Nav className="flex-column">
              <Nav.Link href="#" className="text-light p-0 mb-2">
                Web Development
              </Nav.Link>

              <Nav.Link href="#" className="text-light p-0 mb-2">
                Mobile Development
              </Nav.Link>

              <Nav.Link href="#" className="text-light p-0 mb-2">
                UI/UX Design
              </Nav.Link>

              <Nav.Link href="#" className="text-light p-0">
                API Integration
              </Nav.Link>
            </Nav>
          </Col>

          {/* Contact */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3">Contact</h5>

            <p className="mb-2">Ahmedabad, Gujarat</p>
            <p className="mb-2">+91 9876543210</p>
            <p className="mb-0">info@devshop.com</p>
          </Col>

        </Row>

        <hr className="border-secondary" />

        <div className="text-center">
          © {new Date().getFullYear()} DevShop. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;