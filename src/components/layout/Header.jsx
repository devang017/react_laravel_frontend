import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function Header(props) {
    return (
        <Navbar expand="lg" bg="white" className="shadow-sm py-3 border-bottom" sticky="top">
            <Container>

                <Navbar.Brand href="/" className="fw-bold fs-3 text-primary">DevShop</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">

                    {/* Left Menu */}
                    <Nav className="mx-auto">

                        {/* <Nav.Link as={NavLink} to="/" className="fw-semibold px-3">
                            Home
                        </Nav.Link> */}

                        {props.isLoggedIn &&
                            <>
                                <Nav.Link as={NavLink} to="/dashboard" className="fw-semibold px-3">
                                    Dashboard
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/products" className="fw-semibold px-3">
                                    Products
                                </Nav.Link>
                            </>
                        }

                    </Nav>

                    {/* Right Side */}
                    <div className="d-flex align-items-center gap-2">

                        {props.isLoggedIn && <>
                            <Button as={NavLink} to="/login" variant="primary">
                                Logout
                            </Button>
                        </>}

                        {!props.isLoggedIn && <>
                            <Button as={NavLink} to="/login" variant="outline-primary">
                                Login
                            </Button>

                            <Button as={NavLink} to="/register" variant="primary">
                                Register
                            </Button>
                        </>}
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;