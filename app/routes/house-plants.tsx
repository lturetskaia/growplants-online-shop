import type { Route } from "../+types/root";
import ProductList from "../../features/productList/ProductList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "House Plants | Indoor Plants" },
    {
      name: "description",
      content:
        "Add a touch of greenery to tranform your home.",
    },
  ];
}

export default function HousePlants() {

  return <ProductList category = "indoor-plants"/>;
}
