import { Carousel } from "react-bootstrap";
import type { ProductItem } from "common/types";
import { constructAltText, constructImgPaths } from "common/helperFunctions";

export default function ImageGallery({ product }: { product: ProductItem }) {
  const imagePaths = constructImgPaths(product.category, product.image);
  const altText = constructAltText(product.name);

  return (
    <div className="product-gallery">
      <Carousel>
        {imagePaths.map(img => <Carousel.Item key={img}>
          <img src={img} alt={altText} />
        </Carousel.Item>)}
        {/* <Carousel.Item>
          <img src={imagePath} alt={altText} />
        </Carousel.Item> */}
        {/* <Carousel.Item>
          <img src={imagePath} alt={altText} />
        </Carousel.Item> */}
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
