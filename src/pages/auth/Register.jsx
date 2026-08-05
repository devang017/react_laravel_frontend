import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/auth";
import useAuth from "../../hooks/useAuth";


function Register() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { login: authLogin } = useAuth();

    const handleSubmit = async (e) => {
            e.preventDefault();
    
            setErrors({});
            setMessage("");
            setLoading(true);
    
            try {
                const response = await register({
                    name,
                    email,
                    password,
                    password_confirmation: confirmPassword
                });
    
                console.log(response.data);
    
                // Store token
                authLogin(response.data.token);
    
                // Redirect
                navigate("/dashboard");
    
            } catch (error) {
                if (error.response?.status === 422) {
                    setErrors(error.response.data.errors);
    
                } else if (error.response?.status === 401) {
                    setMessage(error.response.data.message);
    
                } else {
                    setMessage("Something went wrong. Please try again.");
                }
    
            } finally {
                setLoading(false);
            }
        };


    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow border-0">
                        <Card.Body className="p-4">

                            <h2 className="text-center mb-4">
                                Create Account
                            </h2>

                            {message && (
                                <Alert variant="danger">
                                    {message}
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>
                               
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" isInvalid={!!errors.name}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name?.[0]}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" isInvalid={!!errors.email}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email?.[0]}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" isInvalid={!!errors.password}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password?.[0]}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" isInvalid={!!errors.confirmPassword}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.confirmPassword?.[0]}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="d-grid">
                                    <Button variant="primary" size="lg" type="submit" disabled={loading}>
                                        {loading ? "Registering..." : "Register"}
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