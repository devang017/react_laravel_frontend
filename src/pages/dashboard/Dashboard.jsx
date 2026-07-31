import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";

function Dashboard() {
    return (
        <Container fluid className="py-4">

            {/* Page Title */}
            <Row className="mb-4">
                <Col>
                    <h2 className="fw-bold">Dashboard</h2>
                    <p className="text-muted">
                        Welcome back! Here's what's happening today.
                    </p>
                </Col>
            </Row>

            {/* Statistics */}
            <Row className="g-4">

                <Col md={3}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <h6 className="text-muted">Users</h6>
                            <h2>1,245</h2>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <h6 className="text-muted">Orders</h6>
                            <h2>356</h2>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <h6 className="text-muted">Products</h6>
                            <h2>128</h2>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <h6 className="text-muted">Revenue</h6>
                            <h2>$18,500</h2>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            {/* Recent Orders */}
            <Row className="mt-5">
                <Col>

                    <Card className="shadow-sm border-0">

                        <Card.Header className="bg-white">
                            <h5 className="mb-0">
                                Recent Orders
                            </h5>
                        </Card.Header>

                        <Card.Body>

                            <Table hover responsive>

                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Customer</th>
                                        <th>Product</th>
                                        <th>Status</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr>
                                        <td>1</td>
                                        <td>John Doe</td>
                                        <td>MacBook Pro</td>
                                        <td>
                                            <span className="badge bg-success">
                                                Completed
                                            </span>
                                        </td>
                                        <td>$1,250</td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>David</td>
                                        <td>iPhone 16</td>
                                        <td>
                                            <span className="badge bg-warning text-dark">
                                                Pending
                                            </span>
                                        </td>
                                        <td>$999</td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>Smith</td>
                                        <td>Samsung S25</td>
                                        <td>
                                            <span className="badge bg-danger">
                                                Cancelled
                                            </span>
                                        </td>
                                        <td>$899</td>
                                    </tr>

                                </tbody>

                            </Table>

                        </Card.Body>

                    </Card>

                </Col>
            </Row>

            {/* Quick Actions */}
            <Row className="mt-5">

                <Col md={4}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>

                            <h5>Add User</h5>

                            <p className="text-muted">
                                Create a new user account.
                            </p>

                            <Button variant="primary">
                                Add User
                            </Button>

                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>

                            <h5>Add Product</h5>

                            <p className="text-muted">
                                Create a new product.
                            </p>

                            <Button variant="success">
                                Add Product
                            </Button>

                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>

                            <h5>View Reports</h5>

                            <p className="text-muted">
                                Check sales and revenue reports.
                            </p>

                            <Button variant="dark">
                                View Reports
                            </Button>

                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Container>
    );
}

export default Dashboard;