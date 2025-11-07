import { useAppSelector } from "store/hooks";
import { useEffect, useState } from "react";

export default function CartBadge() {
  const [isClient, setIsClient] = useState(false);
  // prevent server-side pre-render
  useEffect(() => {
    setIsClient(true);
  }, []);

  const cartData = useAppSelector((state) => state.cart);
  const totalQuantity = cartData.reduce(
    (prevQuantity, currItem) => prevQuantity + currItem.quantity,
    0
  );

  let visibityClass = "";

  if (totalQuantity === 0) {
    visibityClass = "visually-hidden";
  }

  return isClient ? (
    <div id="cart-badge" className={visibityClass}>
      <p>{totalQuantity}</p>
      <span className="visually-hidden">products in your cart.</span>
    </div>
  ) : null;
}
