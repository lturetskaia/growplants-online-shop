import type { Route } from "../+types/root";
import { useAppSelector } from "store/hooks";
import type { RootState } from "store/reduxStore";

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
    productCategory === "house-plants"
  ) {
    product = useAppSelector((state: RootState) => state.plantProducts).find((product) => product.id === productId);
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
      <h2>{product.name}</h2>
      <img src={imagePath} alt={altText} />
      <p>{product.description} </p>
    </>
  );
}
