import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow border-0">
                        <Card.Body className="p-4">

                            <h2 className="text-center mb-4">
                                Create Account
                            </h2>

                            <Form>

                                <Row>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>First Name</Form.Label>

                                            <Form.Control
                                                type="text"
                                                placeholder="First Name"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Last Name</Form.Label>

                                            <Form.Control
                                                type="text"
                                                placeholder="Last Name"
                                            />
                                        </Form.Group>
                                    </Col>

                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>

                                    <Form.Control
                                        type="email"
                                        placeholder="Email Address"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>

                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Confirm Password</Form.Label>

                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                    />
                                </Form.Group>

                                <div className="d-grid">
                                    <Button variant="primary" size="lg">
                                        Register
                                    </Button>
                                </div>

                            </Form>

                            <hr />

                            <div className="text-center">
                                Already have an account?{" "}
                                <Link to="/login">
                                    Login
                                </Link>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;