import { Container, Row, Col } from "react-bootstrap";
import me from "../img/me.png"
import "../style/home.css"

function Home() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={4}>
                        <img src={me} alt="" className="w-100" />
                    </Col>
                    <Col md={8} className="d-flex align-items-center justify-content-center">
                        <h1 className="underline">Where Things Become Amazing</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;