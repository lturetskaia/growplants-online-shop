import type { Route } from "../+types/root";
import { Button } from "react-bootstrap";

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
        <ul id="cart-items">
          <li className="cart-header">
            <div>Item</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </li>
          <li className="cart-item">
            <div>
              <a href="">
                <img src="products/house-plants/cyclamen.png" alt="" />
              </a>
            </div>
            <div className="cart-item-info">
              <p>Item Name</p>
              <p>Option: option description</p>
            </div>
            <div>10.99</div>
            <div>1</div>
            <div>10.99</div>
            <div>
              <Button className="btn btn-outline-success delete-btn">X</Button>
            </div>
          </li>

          <li className="cart-item">
            <div>
              <a href="">
                <img src="products/house-plants/cyclamen.png" alt="" />
              </a>
            </div>
            <div className="cart-item-info">
              <p>Item Name</p>
              <p>Option: option description</p>
            </div>
            <div>10.99</div>
            <div>1</div>
            <div>10.99</div>
            <div>
              <Button className="btn btn-outline-success delete-btn">X</Button>
            </div>
          </li>
        </ul>
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
