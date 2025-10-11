import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavB from "react-bootstrap/Navbar";

export default function Navbar() {
  return (
    <NavB expand="lg" className="bg-body-tertiary">
      <Container>
        <NavB.Toggle aria-controls="basic-NavB-nav" />
        <NavB.Brand href="/">GrowPlants</NavB.Brand>
        <NavB.Collapse id="basic-NavB-nav">
          <Nav className="me-auto">
            <Nav.Link href="/products/house-plants">House Plants</Nav.Link>
            <Nav.Link href="/products/garden-plants">Garden Plants</Nav.Link>
            <Nav.Link href="/products/pots-and-planters">
              Pots & Planters{" "}
            </Nav.Link>
          </Nav>
        </NavB.Collapse>
        <NavB.Brand href="/">
          <img
            className="nav-icon"
            src="/shopping-cart-icon.svg"
          />
        </NavB.Brand>
      </Container>
    </NavB>
  );
}
