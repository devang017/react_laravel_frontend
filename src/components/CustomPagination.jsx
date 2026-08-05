import { Row, Col, Pagination } from "react-bootstrap";

function CustomPagination({ pagination, onPageChange }) {

    if (!pagination.last_page || pagination.last_page <= 1) {
        return null;
    }

    return (
        <Row className="align-items-center">

            <Col>

                <small className="text-muted">
                    Showing {pagination.from} to {pagination.to} of {pagination.total} entries
                </small>

            </Col>

            <Col xs="auto">

                <Pagination className="mb-0">

                    <Pagination.Prev
                        disabled={pagination.current_page === 1}
                        onClick={() => onPageChange(pagination.current_page - 1)}
                    />

                    {Array.from(
                        { length: pagination.last_page },
                        (_, index) => (
                            <Pagination.Item
                                key={index + 1}
                                active={pagination.current_page === index + 1}
                                onClick={() => onPageChange(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        )
                    )}

                    <Pagination.Next
                        disabled={pagination.current_page === pagination.last_page}
                        onClick={() => onPageChange(pagination.current_page + 1)}
                    />

                </Pagination>

            </Col>

        </Row>

    );
}

export default CustomPagination;