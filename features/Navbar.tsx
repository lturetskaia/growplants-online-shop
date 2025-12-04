import Container from "react-bootstrap/cjs/Container.js";
import Nav from "react-bootstrap/cjs/Nav.js";
import NavB from "react-bootstrap/cjs/Navbar.js";
import { NavLink } from "react-router";
import CartBadge from "./Cart/CartBadge";

export default function Navbar() {
  return (
    <NavB collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <NavB.Brand href="/" id="nav-brand">
          <img src="/icons/growplants-icon.png" className="nav-icon" />
          <span>GrowPlants</span>
        </NavB.Brand>
        <NavB.Toggle aria-controls="responsive-navbar-nav" />
        <NavB.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" variant="underline">
            <Nav.Link as={NavLink} to="/" href="/">
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/products/house-plants"
              href="/products/house-plants"
            >
              House Plants
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/products/garden-plants"
              href="/products/garden-plants"
            >
              Garden Plants
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/products/pots-and-planters"
              href="/products/pots-and-planters"
            >
              Pots & Planters{" "}
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/cart"} href="/cart">
              My Cart
            </Nav.Link>
          </Nav>
        </NavB.Collapse>
        <NavB.Brand href="/" id="nav-brand-mobile">
          <img src="/icons/growplants-icon.png" className="nav-icon" />
          <span>GrowPlants</span>
        </NavB.Brand>
        <div id="cart-icon-div">
          <Nav.Link as={NavLink} to={"/cart"} href="/cart">
            <img className="nav-icon" src="/icons/shopping-cart-icon.svg" />
          </Nav.Link>
          <CartBadge />
        </div>
      </Container>
    </NavB>
  );
}
