import type { Route } from "../+types/root";
import { useAppDispatch, useAppSelector } from "store/hooks";
import ProductRating from "features/ProductRating";
import ProductOptions from "features/ProductOptions";
import { Button, Accordion } from "react-bootstrap";
import { useRef, useState } from "react";
import type { ProductOption } from "common/types";
import { cartSliceActions } from "features/Cart/cartSlice";
import { getProductData } from "common/helperFunctions";
import QuantityInput from "features/QuantityInput";
import ImageGallery from "features/ProductPage/ImageGallery";
import ProductAccordion from "features/ProductPage/ProductAccordion";

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
  const product = getProductData(
    productId,
    productCategory,
    plantsData,
    potsData
  );

  if (!product) {
    return <p> The item was not found!</p>;
  }
  const [currOption, setCurOption] = useState<ProductOption>(
    product.options[0]
  );

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
    if (newOption[0].quantity > 0) {
      setCurOption(newOption[0]);
    }
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
        <ImageGallery product={product} />
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
                <QuantityInput
                  userQuantity={userQuantity}
                  maxQuantity={currOption.quantity}
                  handleChangeQuantity={handleChangeQuantity}
                />
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
        <ProductAccordion description={product.description}/>
      </section>
    </main>
  );
}
