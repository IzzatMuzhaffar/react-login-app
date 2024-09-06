import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


export default function Home() {
    const navigate1 = useNavigate()
    function proceed() {
        navigate1("/login")
    }

    return (
        <Container>
            <h1 className="my-3">Welcome Home!</h1>
            <Button variant="primary" type="submit" onClick={proceed}>
                Proceed
            </Button>
        </Container>
    )
}