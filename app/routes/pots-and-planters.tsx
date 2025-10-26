import type { Route } from "../+types/root";
import ProductList from "../../features/ProductList/ProductList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pots and Planters" },
    {
      name: "description",
      content:
        "Discover a wide range of pots, planters and planting accessories.",
    },
  ];
}

export default function PotsAndPlanters() {
  return <ProductList category = "pots-and-planters"/>;;
}
