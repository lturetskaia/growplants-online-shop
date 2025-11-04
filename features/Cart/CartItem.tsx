import { Link } from "react-router";
import { Button } from "react-bootstrap";
import type { CartItem } from "common/types";
import {
  getProductData,
  constructImgPath,
  constructAltText,
  constructURLPath,
} from "common/helperFunctions";

export default function CartItem({ cartItem }: { cartItem: CartItem }) {
  const productData = getProductData(cartItem.id, cartItem.category);
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
          {cartItem.category.includes('plants') ? "Size: " : "Colour: "}
          {cartItem.option}
        </p>
      </div>
      <div>{productPrice}</div>
      <div>{cartItem.quantity}</div>
      <div>{cartItem.quantity * productPrice}</div>
      <div>
        <Button className="btn btn-outline-success delete-btn">X</Button>
      </div>
    </li>
  );
}
