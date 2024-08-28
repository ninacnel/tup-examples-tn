import { Col, Container, Row } from 'react-bootstrap'

const Columns = () => {
    return (
        <Container >
            <Row style={{ height: "400px" }}>
                <Col className="border border-4" md={2}>Column 1</Col>
                <Col className="border border-4" md={6}>Column 2</Col>
                <Col className="border border-4" md={4}>Column 3</Col>
            </Row>
        </Container>
    )
}

export default Columns