import type { Route } from "../+types/root";
import { Button } from "react-bootstrap";
import { useAppSelector } from "store/hooks";
import CartItem from "features/Cart/CartItem";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Your Cart | GrowPlants" },
    {
      name: "description",
      content: "Your shopping cart",
    },
  ];
}

export default function Cart() {
  const cartData = useAppSelector((state) => state.cart);
  if (cartData.length === 0) {
    return (
      <div className="cart-empty">
        <p>Your cart is empty.</p>
        <Link to="/">
          <Button className="btn btn-outline-success accent-btn">
            Continue shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2>Your Cart</h2>
      <div>
        <ul id="cart-items">
          {cartData.map((cartItem) => (
            <CartItem cartItem={cartItem}></CartItem>
          ))}
        </ul>
        <div id="cart-summary">
          <p>TOTAL:</p>
          <Link to="">
            <Button className="btn btn-outline-success"> Check out</Button>
          </Link>
          <Link to="/">
            <Button className="btn btn-outline-success accent-btn">
              Continue shopping
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
