import { Button } from "react-bootstrap";
import { Link } from "react-router";
import type { ProductItem } from "common/types";
import { constructImgPath, constructURLPath, constructAltText } from "common/helperFunctions";

export default function ProductCard({ product }: { product: ProductItem }) {
const imagePath = constructImgPath(product.category, product.image[0]);
  const altText = constructAltText(product.name);
  const urlPath = constructURLPath(product.id, product.category);

  //find minimum item price
  const startPrice = product.options[0].price;
  const minPrice = product.options.reduce(
    (prev, curr) => (curr.price < prev ? curr.price : prev),
    startPrice
  );

  //check if any options are in stock (quantity>0)
  const maxQuantity = product.options.reduce(
    (prevMax, curr) => (curr.quantity > prevMax ? curr.quantity : prevMax),
    0
  );
  const isStock = maxQuantity > 0 ? true : false;

  return (
    <li className="product-card">
      <div>
        <Link to={urlPath} className="image-link">
          <img
            src={imagePath}
            alt={altText}
            className="card-image"
            loading="lazy"
          />
        </Link>
        <Link to={urlPath} className="name-link">
          {" "}
          <h3>{product.name}</h3>
        </Link>
      </div>
      <div>
        <p className="product-price">{"from  \u00A3" + `` + minPrice.toFixed(2)} </p>
        <Link to={urlPath}>
          <Button
            variant="outline-success"
            className={isStock ? "" : "disabled"}
          >
            {isStock ? "Choose options" : "Out of stock"}
          </Button>
        </Link>
      </div>
    </li>
  );
}
