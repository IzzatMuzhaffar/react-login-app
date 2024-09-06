
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap"

function Dashboard() {
    return (
        <Container>
            <h1 className='my-3'>Dashboard</h1>
            <Row className="my-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Sigma School Analytics</Card.Title>
                        <Card.Text>
                            People who graduate who get jobs: 80%
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>

    );
}

export default Dashboard;