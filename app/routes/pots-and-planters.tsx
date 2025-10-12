import type { Route } from "../+types/root";

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
  return <div>Pots and Planters</div>;
}
