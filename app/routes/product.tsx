import type { Route } from "../+types/root";
import { useAppSelector } from "store/hooks";
import type { RootState } from "store/reduxStore";
import { Carousel, Button } from "react-bootstrap";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "House Plants | Indoor Plants" },
    {
      name: "description",
      content: "Add a touch of greenery to tranform your home.",
    },
  ];
}

export default function Product({ params }: Route.ComponentProps) {
  const productCategory = params.productCategory;
  const productId = Number(params.productId);

  let product;

  if (
    productCategory === "house-plants" ||
    productCategory === "garden-plants"
  ) {
    product = useAppSelector((state: RootState) => state.plantProducts).find(
      (product) => product.id === productId
    );
  } else if (productCategory === "pots-and-planters") {
    product = useAppSelector(
      (state: RootState) => state.potsPlantersProducts
    ).find((product) => product.id === productId);
  }

  if (!product) {
    return <p> The item was not found!</p>;
  }

  const imagePath = `/products/${productCategory}/${product.image}`;
  const altText = `The image of ${product.name}`;

  return (
    <>
      <section className="product-main">
        <div className="product-gallery">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img src={imagePath} alt={altText} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={imagePath} alt={altText} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={imagePath} alt={altText} />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <div className="product-controls">
            <div className="add-to-cart-btngroup">
              <div className="quantity-input">
                <button> &ndash;</button>
                <input
                  type="number"
                  min="1"
                  max="product.quanity"
                  defaultValue="1"
                  step="1"
                />
                <button>+</button>
              </div>
              <Button
                variant="outline-success"
                className={product.quantity > 0 ? "" : "disabled"}
              >
                {product.quantity > 0 ? "Add to cart" : "Out of stock"}
              </Button>
            </div>
            <img
              className="like-btn"
              src="/heart-like-icon.svg"
              alt="Save button"
            />
          </div>
        </div>
      </section>
      <section className="product-details">
        <p>{product.description} </p>
      </section>
    </>
  );
}
