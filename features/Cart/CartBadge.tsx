import { useAppSelector } from "store/hooks";

export default function CartBadge() {
  const cartData = useAppSelector((state) => state.cart);
  const totalQuantity = cartData.reduce(
    (prevQuantity, currItem) => prevQuantity + currItem.quantity,
    0
  );
  let visibityClass = "";

  if (totalQuantity === 0) {
    visibityClass = "visually-hidden";
  }

  return (
    <div id="cart-badge" className={visibityClass}>
      <p>{totalQuantity}</p>
      <span className="visually-hidden">products in your cart.</span>
    </div>
  );
}
