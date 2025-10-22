import { Button } from "react-bootstrap";

interface ProductItem {
  id: number;
  name: string;
  price: number;
  isStock: boolean;
  image: string;
}

export default function ProductCard({
  id,
  name,
  price,
  isStock,
  image,
}: ProductItem) {
  const imagePath = `/products/house-plants/${image}`;
  const altText = `The image of ${name}`;

  return (
    <li className="product-card">
      <div>
        <img src={imagePath} alt={altText} className="product-image" />
        <h3>{name}</h3>
      </div>
      <div>
        <p className="product-price">{price.toFixed(2)} &pound;</p>
        <Button variant="outline-success" className={isStock ? "" : "disabled"}>
          {isStock ? "Add to cart" : "Out of stock"}
        </Button>
      </div>
    </li>
  );
}
