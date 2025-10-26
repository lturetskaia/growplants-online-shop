import type { Route } from "../+types/root";
import { useAppSelector } from "store/hooks";
import type { RootState } from "store/reduxStore";
import ProductRating from "features/ProductRating";
import ProductOptions from "features/ProductOptions";
import { Carousel, Button, Accordion } from "react-bootstrap";
import { useRef, useState } from "react";

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
  const [userQuantity, setUserQuantity] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const productCategory = params.productCategory;
  const productId = Number(params.productId);
  const reviews = null;
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

  function handleChangeQuantity(option: string) {
    if (option === "increment" && userQuantity < product!.quantity) {
      setUserQuantity(+inputRef.current!.value + 1);
    } else if (option === "decrement" && userQuantity > 0) {
      setUserQuantity(+inputRef.current!.value - 1);
    }
  }

  return (
    <>
      <section className="product-main">
        <div className="product-gallery">
          <Carousel>
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
          <div>
            <h2>{product.name}</h2>
            <ProductRating reviews={reviews} />
          </div>
          <ProductOptions />
          <div>
            <p className="product-price left">
              {product.price.toFixed(2)} &pound;
            </p>
            <div className="product-controls">
              <div className="add-to-cart-btngroup">
                <div className="quantity-input">
                  <button onClick={() => handleChangeQuantity("decrement")}>
                    {" "}
                    &ndash;
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={product.quantity}
                    step="1"
                    value={userQuantity}
                    ref={inputRef}
                    readOnly
                  />
                  <button onClick={() => handleChangeQuantity("increment")}>
                    +
                  </button>
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
                src="/icons/heart-like-icon.svg"
                alt="Add to wish list icon"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="product-details">
        <Accordion defaultActiveKey="0" alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>About</Accordion.Header>
            <Accordion.Body>
              {" "}
              <p>{product.description} </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Delivery</Accordion.Header>
            <Accordion.Body>
              {" "}
              <p>
                <span>Packaging:</span> We pack all items using custom-designed
                boxes with special compartments and supports to prevent movement
                and damage, so your products arrive in perfect condition. Our
                plant boxes are 100% recyclable, so they can be responsibly
                disposed of without harming the planet.
              </p>
              <p>
                <span>Quick delivery:</span> The standard delivery time for our
                plants is 2-3 days. You can also choose next day delivery with
                the same fee for any amount of plants & accessories.
              </p>
              <p>
                <span>Plastic Nursery Pots:</span> All our plants are supplied
                in practical plastic nursery pots. If you prefer a more
                decorative option, we offer a range of stylish pots available
                for purchase separately.
              </p>
              <p>
                <span>Plant Pot Sizes:</span> Pot sizes may vary by +/- 1cm. To
                ensure a proper fit, we recommend selecting a decorative
                cachepot that is 1-2cm larger than the nursery pot size. For
                instance, if you purchase a plant in a 15cm pot, a 16 - 17cm
                decorative pot would be ideal.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </>
  );
}
