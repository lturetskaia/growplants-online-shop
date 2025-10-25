import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavB from "react-bootstrap/Navbar";
import { NavLink} from "react-router";

export default function Navbar() {
  return (
    <NavB expand="lg" className="bg-body-tertiary">
      <Container>
        <NavB.Toggle aria-controls="basic-NavB-nav" />
        <NavB.Brand href="/">
          <img src="/icons/growplants-icon.png" className="nav-icon"/>
          <span>GrowPlants</span>
        </NavB.Brand>
        <NavB.Collapse id="basic-NavB-nav">
          <Nav className="me-auto" variant="underline">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products/house-plants">
              House Plants
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products/garden-plants">
              Garden Plants
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products/pots-and-planters">
              Pots & Planters{" "}
            </Nav.Link>
          </Nav>
        </NavB.Collapse>
        <div>
          <NavB.Brand href="/cart">
            <img className="nav-icon" src="/icons/shopping-cart-icon.svg" />
          </NavB.Brand>
        </div>
      </Container>
    </NavB>
  );
}
