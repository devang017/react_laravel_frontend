import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={5}>
                    <Card className="shadow border-0">
                        <Card.Body className="p-4">
                            <h2 className="text-center mb-4">Login</h2>

                            <Form>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>

                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email" value={email} onChange={(e) => {setEmail(e.target.value)}}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Password</Form.Label>

                                    <Form.Control
                                        type="password"
                                        placeholder="Enter your password" value={password} onChange={(e) => {setPassword(e.target.value)}}
                                    />
                                </Form.Group>

                                <div className="d-grid">
                                    <Button variant="primary" size="lg">
                                        Login
                                    </Button>
                                </div>

                            </Form>

                            <hr />

                            <div className="text-center">
                                Don't have an account?{" "}
                                <Link to="/register">
                                    Register
                                </Link>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;