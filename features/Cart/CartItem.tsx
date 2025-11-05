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

export default function CartItem({ cartItem }: { cartItem: CartItem }) {
  const plantsData = useAppSelector((state) => state.plantProducts);
    const potsData = useAppSelector((state) => state.potsPlantersProducts);
  const dispatch = useAppDispatch();
  const productData = getProductData(cartItem.id, cartItem.category,plantsData,potsData);
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

    imgPath = constructImgPath(cartItem.category, productData.image);
    altText = constructAltText(productData.name);
  }

  if (!productData || productPrice === 0) {
    return <></>;
  }

  function handleDeleteCartItem() {
    dispatch(cartSliceActions.removeItem(cartItem));
  }

  return (
    <li className="cart-item">
      <div>
        <Link to={urlPath}>
          <img src={imgPath} alt={altText} />
        </Link>
      </div>
      <div className="cart-item-info">
        <p>{cartItem.name}</p>
        <p>
          {cartItem.category.includes("plants") ? "Size: " : "Colour: "}
          {cartItem.option}
        </p>
      </div>
      <div>&pound;{productPrice.toFixed(2)}</div>
      <div>{cartItem.quantity}</div>
      <div>&pound;{(cartItem.quantity * productPrice).toFixed(2)}</div>
      <div>
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
