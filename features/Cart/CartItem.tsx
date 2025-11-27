import { Link } from "react-router";
import { Button } from "react-bootstrap";
import type { CartItem } from "common/types";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { cartSliceActions } from "./cartSlice";
import {
  getProductData,
  constructImgPath,
  constructAltText,
  constructURLPath,
} from "common/helperFunctions";
import QuantityInput from "features/QuantityInput";

export default function CartItem({ cartItem }: { cartItem: CartItem }) {
  const plantsData = useAppSelector((state) => state.plantProducts);
  const potsData = useAppSelector((state) => state.potsPlantersProducts);
  const dispatch = useAppDispatch();
  const productData = getProductData(
    cartItem.id,
    cartItem.category,
    plantsData,
    potsData
  );
  let productQuantity = 0;
  let productPrice = 0;
  let imgPath;
  let altText = "Product image";
  let urlPath = constructURLPath(cartItem.id, cartItem.category);

  if (productData) {
    const productOption = productData.options.find(
      (item) => item.option === cartItem.option
    );

    productPrice = productOption?.price || 0;
    productQuantity = productOption?.quantity || 0;

    imgPath = constructImgPath(cartItem.category, productData.image[0]);
    altText = constructAltText(productData.name);
  }

  if (!productData || productPrice === 0) {
    return <></>;
  }

  function handleDeleteCartItem() {
    dispatch(cartSliceActions.removeItem(cartItem));
  }

  function handleChangeQuantity(option: string) {
    if (cartItem.quantity === 1 && option === "decrement") {
      dispatch(cartSliceActions.removeItem(cartItem));
    } else if (cartItem.quantity > 1 && option === "decrement") {
      dispatch(cartSliceActions.decrementQuantity(cartItem));
    } else if (cartItem.quantity < productQuantity && option === "increment") {
      dispatch(cartSliceActions.incrementQuantity(cartItem));
    }
  }

  const cartOverlayClass =
    productQuantity === 0 ? "cart-item-overlay" : "cart-item-overlay-hidden";

  return (
    <li className="cart-item">
      <div className={cartOverlayClass}></div>
      <div>
        <Link to={urlPath}>
          <img src={imgPath} alt={altText} />
        </Link>
      </div>
      <div className="cart-item-info">
        <p className={productQuantity === 0 ? "strikethrough" : ""}>
          {cartItem.name}
        </p>
        <p>
          {cartItem.category.includes("plants") ? "Size: " : "Colour: "}
          {cartItem.option}
        </p>
        {productQuantity === 0 ? (
          <p className="out-of-stock">out of stock</p>
        ) : null}
      </div>
      <div className={productQuantity === 0 ? "strikethrough" : ""}>
        &pound;{productPrice.toFixed(2)}
      </div>
      <div>
        <QuantityInput
          userQuantity={cartItem.quantity}
          maxQuantity={productQuantity}
          handleChangeQuantity={handleChangeQuantity}
        />
      </div>
      <div className={productQuantity === 0 ? "strikethrough" : ""}>
        &pound;{(cartItem.quantity * productPrice).toFixed(2)}
      </div>
      <div className="delete-btn-div">
        <Button
          className="btn btn-outline-success delete-btn"
          onClick={handleDeleteCartItem}
        >
          X
        </Button>
      </div>
    </li>
  );
}
