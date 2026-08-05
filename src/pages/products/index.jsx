import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Table, Button, Form, InputGroup, Spinner } from "react-bootstrap";
import { getProducts } from "../../api/products";
import CustomPagination from "../../components/CustomPagination";

export default function Index() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [sortBy, setSortBy] = useState("id");
    const [sortOrder, setSortOrder] = useState("asc");

    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        total: 0,
        from: 0,
        to: 0,
    });

    useEffect(() => {

        const fetchProducts = async () => {

            setLoading(true);
            try {
                const response = await getProducts({
                    page,
                    per_page: perPage,
                    search,
                    sort_by: sortBy,
                    sort_order: sortOrder,
                });

                const responseData = response.data.data;

                setProducts(responseData.data);

                setPagination({
                    current_page: responseData.current_page,
                    last_page: responseData.last_page,
                    total: responseData.total,
                    from: responseData.from,
                    to: responseData.to,
                });
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [page, perPage, search, sortBy, sortOrder]);

    const handleSort = (column) => {
        if (sortBy === column) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(column);
            setSortOrder("asc");
        }
    };

    return (
        <Container fluid className="py-4">
            <Row className="align-items-center mb-4">
                <Col>
                    <h2 className="fw-bold mb-1">
                        Products
                    </h2>
                    <p className="text-muted mb-0">
                        Product Listing
                    </p>
                </Col>

                <Col xs="auto">
                    <Button variant="primary">
                        + Add Product
                    </Button>
                </Col>
            </Row>

            <Card className="shadow-sm border-0">
                <Card.Header className="bg-white py-3">
                    <Row>
                        <Col md={3}>
                            <Form.Select value={perPage} onChange={(e) => { setPerPage(Number(e.target.value)); setPage(1); }}>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                            </Form.Select>
                        </Col>
                        <Col md={5}></Col>
                        <Col md={4}>
                            <InputGroup>
                                <Form.Control placeholder="Search..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
                            </InputGroup>
                        </Col>
                    </Row>
                </Card.Header>

                <Card.Body className="p-0">
                    <Table hover responsive className="mb-0 align-middle">
                        <thead className="table-light">
                            <tr>
                                <th style={{ cursor: "pointer" }} onClick={() => handleSort("id")}>
                                    ID {sortBy === "id" && (sortOrder === "asc" ? "▲" : "▼")}
                                </th>

                                <th style={{ cursor: "pointer" }} onClick={() => handleSort("name")}>
                                    Name {sortBy === "name" && (sortOrder === "asc" ? "▲" : "▼")}
                                </th>

                                <th style={{ cursor: "pointer" }} onClick={() => handleSort("price")}>
                                    Price {sortBy === "price" && (sortOrder === "asc" ? "▲" : "▼")}
                                </th>

                                <th style={{ cursor: "pointer" }} onClick={() => handleSort("quantity")}>
                                    Quantity {sortBy === "quantity" && (sortOrder === "asc" ? "▲" : "▼")}
                                </th>

                                <th style={{ cursor: "pointer" }} onClick={() => handleSort("status")}>
                                    Status {sortBy === "status" && (sortOrder === "asc" ? "▲" : "▼")}
                                </th>

                                <th width="180">
                                    Action
                                </th>

                            </tr>
                        </thead>

                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="text-center py-5">
                                        <Spinner animation="border" />
                                    </td>
                                </tr>
                            ) : products.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="text-center py-5">
                                        No Products Found
                                    </td>
                                </tr>
                            ) : (
                                products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>₹{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                            <span className={`badge ${product.status ? "bg-success" : "bg-danger"}`}>
                                                {product.status ? "Active" : "Inactive"}
                                            </span>
                                        </td>
                                        <td>
                                            <Button size="sm" variant="warning" className="me-2">
                                                Edit
                                            </Button>

                                            <Button size="sm" variant="danger">
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer className="bg-white">
                   <CustomPagination pagination={pagination} onPageChange={setPage}/>
                </Card.Footer>
            </Card>
        </Container>
    );
}