import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleProduct, updateProduct } from "../../api/products";

export default function Edit() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [status, setStatus] = useState("");
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();

        setErrors({});
        setMessage("");
        setLoading(true);

        try {
            await updateProduct(id, {
                name,
                price,
                quantity,
                status,
                image,
                description
            });

            // Redirect
            navigate("/products/index");
        } catch (error) {
            console.log(error);
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

    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getSingleProduct(id);
                const product = response.data.data;

                setName(product.name);
                setPrice(product.price);
                setQuantity(product.quantity);
                setStatus(product.status);
                setImageUrl(product.image);
                setDescription(product.description || "");
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <Container fluid className="py-4">

            {/* Page Heading */}
            <Row className="mb-4">
                <Col>
                    <h2 className="fw-bold">Edit Product</h2>
                    <p className="text-muted">
                        Update product information.
                    </p>
                </Col>
                {message && (
                    <Alert variant="danger">
                        {message}
                    </Alert>
                )}
            </Row>

            <Card className="shadow-sm border-0">

                <Card.Header className="bg-white">
                    <h5 className="mb-0">
                        Product Information
                    </h5>
                </Card.Header>

                <Card.Body>
                    <Form onSubmit={handleUpdate}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name" isInvalid={!!errors.name} />
                                    <Form.Control.Feedback type="invalid">{errors.name?.[0]}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label> Price </Form.Label>
                                    <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" isInvalid={!!errors.price} />
                                    <Form.Control.Feedback type="invalid">{errors.price?.[0]}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Enter quantity" isInvalid={!!errors.quantity} />
                                    <Form.Control.Feedback type="invalid">{errors.quantity?.[0]}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} isInvalid={!!errors.status}>
                                        <option value="">Select Status</option>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">{errors.status?.[0]}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label> Product Image </Form.Label>
                            {imageUrl && (
                                <div className="mb-2">
                                    <img src={imageUrl} alt="Preview" className="img-thumbnail" style={{ width: "120px", height: "120px", objectFit: "cover"}}/>
                                </div>
                            )}
                            <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} isInvalid={!!errors.image} />
                            <Form.Control.Feedback type="invalid">{errors.image?.[0]}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={5} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter product description" isInvalid={!!errors.description} />
                            <Form.Control.Feedback type="invalid">{errors.description?.[0]}</Form.Control.Feedback>
                        </Form.Group>

                        <div className="d-flex justify-content-end gap-2">

                            <Button as={NavLink} to="/products/index" variant="outline-secondary">
                                Cancel
                            </Button>

                            <Button type="submit" variant="primary" disabled={loading}>
                                {loading ? "Updating..." : "Update Product"}
                            </Button>

                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}