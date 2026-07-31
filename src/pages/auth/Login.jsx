import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/auth";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({});
        setMessage("");
        setLoading(true);

        try {
            const response = await login({
                email,
                password,
            });

            console.log(response.data);

            // Store token
            localStorage.setItem("token", response.data.token);

            // Redirect
            navigate("/dashboard");

        } catch (error) {

            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);

            } else if (error.response?.status === 401) {
                setMessage(error.response.data.message);

            } else {
                setMessage("Something went wrong. Please try again.");
                console.error(error);
            }

        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={5}>
                    <Card className="shadow border-0">
                        <Card.Body className="p-4">

                            <h2 className="text-center mb-4">
                                Login
                            </h2>

                            {message && (
                                <Alert variant="danger">
                                    {message}
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>

                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        isInvalid={!!errors.email}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.email?.[0]}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Password</Form.Label>

                                    <Form.Control
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        isInvalid={!!errors.password}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.password?.[0]}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="d-grid">
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        disabled={loading}
                                    >
                                        {loading ? "Logging in..." : "Login"}
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