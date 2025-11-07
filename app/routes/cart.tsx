import type { Route } from "../+types/root";
import { Button } from "react-bootstrap";
import { useAppSelector } from "store/hooks";
import CartItem from "features/Cart/CartItem";
import { Link } from "react-router";
import { getProductData } from "common/helperFunctions";
import { useEffect, useState } from "react";

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
  const [isClient, setIsClient] = useState(false);
// prevent server-side pre-render
  useEffect(() => {
    setIsClient(true);
  }, []);

  const cartData = useAppSelector((state) => state.cart);
  const plantsData = useAppSelector((state) => state.plantProducts);
  const potsData = useAppSelector((state) => state.potsPlantersProducts);

  let totalPrice = 0;
  //calculate total cart price
  for (const cartItem of cartData) {
    const productData = getProductData(
      cartItem.id,
      cartItem.category,
      plantsData,
      potsData
    );
    let productPrice = 0;
    let productQuantity = 0;

    if (productData) {
      const productOption = productData.options.find(
        (item) => item.option === cartItem.option
      );

      productPrice = productOption?.price || 0;
      productQuantity = productOption?.quantity || 0;
    }
    const isExceedingQuantity = productQuantity - cartItem.quantity < 0;
    // only if we have price data and the product is in stock
    if (productPrice > 0 && !isExceedingQuantity) {
      totalPrice += cartItem.quantity * productPrice;
    }
  }

  let content = (
    <div id="cart-empty">
      <p>Your cart is empty.</p>
      <Link to="/">
        <Button className="btn btn-outline-success accent-btn">
          Continue shopping
        </Button>
      </Link>
    </div>
  );

  if (cartData.length > 0) {
    content = (
      <>
        <h2>Your Cart</h2>
        <div>
          <ul className="cart-items">
            <li className="cart-header">
              <div>Item</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total price</div>
            </li>
            {cartData.map((cartItem) => (
              <CartItem
                key={cartItem.id + cartItem.option}
                cartItem={cartItem}
              ></CartItem>
            ))}
          </ul>
          <div id="cart-summary">
            <p>TOTAL: &pound;{totalPrice.toFixed(2)} </p>
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

  return (isClient? content : null);
}
