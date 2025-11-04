import type { Route } from "../+types/root";
import { Button } from "react-bootstrap";
import CartItems from "../../features/Cart/CartItems";

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
  return (
    <>
      <h2>Your Cart</h2>
      <div>
        <CartItems />
        <div id="cart-summary">
          <p>TOTAL:</p>
          <Button className="btn btn-outline-success"> Check out</Button>
          <Button className="btn btn-outline-success accent-btn">
            Continue shopping
          </Button>
        </div>
      </div>
    </>
  );
}
