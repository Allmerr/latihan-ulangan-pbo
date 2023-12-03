import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"

function PNavbar() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Kevin Start Up</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default PNavbar
