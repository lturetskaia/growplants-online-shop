import type { Route } from "../+types/root";
import { useAppDispatch, useAppSelector } from "store/hooks";
import ProductRating from "features/ProductRating";
import ProductOptions from "features/ProductOptions";
import { Carousel, Button, Accordion } from "react-bootstrap";
import { useRef, useState } from "react";
import type { ProductItem, ProductOption } from "common/types";
import { cartSliceActions } from "features/Cart/cartSlice";
import { getProductData } from "common/helperFunctions";
import QuantityInput from "features/QuantityInput";

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
  const plantsData = useAppSelector((state) => state.plantProducts);
  const potsData = useAppSelector((state) => state.potsPlantersProducts);

  const [userQuantity, setUserQuantity] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const productCategory = params.productCategory;
  const productId = Number(params.productId);
  const reviews = null; // currently, there's no review data available
  const product = getProductData(productId, productCategory, plantsData, potsData);

  if (!product) {
    return <p> The item was not found!</p>;
  }
  const [currOption, setCurOption] = useState<ProductOption>(
    product.options[0]
  );

  const imagePath = `/products/${productCategory}/${product.image}`;
  const altText = `The image of ${product.name}`;

  //Change quantity input using +/- buttons
  function handleChangeQuantity(option: string) {
    if (option === "increment" && userQuantity < currOption.quantity) {
      setUserQuantity(userQuantity + 1);
    } else if (option === "decrement" && userQuantity > 1) {
      setUserQuantity(userQuantity - 1);
    }
  }

  // Choose product option
  function handleChooseOption(optionName: string) {
    const newOption = product!.options.filter(
      (item) => item.option === optionName
    );

    setCurOption(newOption[0]);
  }

  function handleAddToCart() {
    //checks for quantity
    const item = {
      id: product!.id,
      name: product!.name,
      option: currOption.option,
      category: product!.category,
      quantity: userQuantity,
    };
    dispatch(cartSliceActions.addItem(item));
  }

  return (
    <main>
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
            <h2 className="product-page-title">{product.name}</h2>
            <ProductRating reviews={reviews} />
          </div>
          <ProductOptions
            productOptions={product.options}
            currOption={currOption.option}
            handleChooseOption={handleChooseOption}
          />
          <div>
            <p className="product-price left">
              &pound;{currOption.price.toFixed(2)} 
            </p>
            <div className="product-controls">
              <div className="add-to-cart-btngroup">
                <QuantityInput userQuantity={userQuantity} maxQuantity={currOption.quantity} handleChangeQuantity={handleChangeQuantity}/>
                <Button
                  variant="outline-success"
                  className={currOption.quantity > 0 ? "" : "disabled"}
                  onClick={handleAddToCart}
                >
                  {currOption.quantity > 0 ? "Add to cart" : "Out of stock"}
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
    </main>
  );
}
