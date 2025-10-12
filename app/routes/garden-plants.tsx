import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Garden Plants | Outdoor Plants" },
    {
      name: "description",
      content:
        "Discover perennials, shrubs, bulbs, climbers, roses, trees and many other garden plants",
    },
  ];
}

export default function GardenPlants() {
  return <div>Garden Plants</div>;
}
