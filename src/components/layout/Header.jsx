import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";

import { logout as logoutApi } from "../../api/auth";
import useAuth from "../../hooks/useAuth";

function Header() {

    const navigate = useNavigate();

    const { isLoggedIn, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logoutApi();
        } catch (error) {
            console.error(error);
        } finally {
            logout(); // Removes token and updates Context
            navigate("/login");
        }
    };

    return (
        <Navbar
            expand="lg"
            bg="white"
            className="shadow-sm py-3 border-bottom"
            sticky="top"
        >
            <Container>

                <Navbar.Brand
                    as={NavLink}
                    to="/"
                    className="fw-bold fs-3 text-primary"
                >
                    DevShop
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">

                    {/* Left Menu */}
                    <Nav className="mx-auto">

                        {isLoggedIn && (
                            <>
                                <Nav.Link
                                    as={NavLink}
                                    to="/dashboard"
                                    className="fw-semibold px-3"
                                >
                                    Dashboard
                                </Nav.Link>

                                <Nav.Link
                                    as={NavLink}
                                    to="/products/index"
                                    className="fw-semibold px-3"
                                >
                                    Products
                                </Nav.Link>
                            </>
                        )}

                    </Nav>

                    {/* Right Menu */}
                    <div className="d-flex align-items-center gap-2">

                        {isLoggedIn ? (
                            <Button
                                variant="danger"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        ) : (
                            <>
                                <Button
                                    as={NavLink}
                                    to="/login"
                                    variant="outline-primary"
                                >
                                    Login
                                </Button>

                                <Button
                                    as={NavLink}
                                    to="/register"
                                    variant="primary"
                                >
                                    Register
                                </Button>
                            </>
                        )}

                    </div>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header;