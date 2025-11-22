import { Carousel } from "react-bootstrap";
import type { ProductItem } from "common/types";

export default function ImageGallery({ product }: { product: ProductItem }) {
  const imagePath = `/products/${product.category}/${product.image}`;
  const altText = `The image of ${product.name}`;

  return (
    <div className="product-gallery">
      <Carousel>
        <Carousel.Item>
          <img src={imagePath} alt={altText} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={imagePath} alt={altText} />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={`/common/plant-size.png`}
            alt={altText}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
