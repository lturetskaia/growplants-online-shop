import type { Route } from "../+types/root";
import { useAppSelector } from "store/hooks";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "House Plants | Indoor Plants" },
    {
      name: "description",
      content: "Add a touch of greenery to tranform your home.",
    },
  ];
}


export default function Product({params}:Route.ComponentProps) {
  const productId = params.productId;
  console.log(productId);

  return (
    <>
      <h2>Product Name</h2>
      <img src="/image.png" alt="Image description" />
      <p>Product description </p>
    </>
  );
}
