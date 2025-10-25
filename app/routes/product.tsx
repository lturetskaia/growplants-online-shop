import type { Route } from "../+types/root";
import { useAppSelector } from "store/hooks";
import type { RootState } from "store/reduxStore";
import { Carousel, Button, Accordion } from "react-bootstrap";

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
          <Carousel >
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
            <div className="rating-info">
              <img
                className="rating-img"
                src="/stars.png"
                alt="Five star rating"
              />
              <span>0 reviews</span>
            </div>
          </div>
          <div>
            <p className="product-price left">
              {product.price.toFixed(2)} &pound;
            </p>
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
        </div>
      </section>

      <section className="product-details">
        <Accordion defaultActiveKey="0" alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>About the plant</Accordion.Header>
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
                <span>Our Plant Nursery</span>: Our plants are nurtured and
                prepared for dispatch in our tropical glasshouse nursery, where
                we maintain an average temperature of 19°C. This ensures optimal
                conditions for plant health.
              </p>
              <p>
                <span>Packaging:</span> We pack the plants using custom-designed
                boxes with special compartments and supports to prevent movement
                and damage, so your plants arrive in perfect condition. Our
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
