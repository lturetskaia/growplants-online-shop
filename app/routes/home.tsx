import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "House Plants | Garden Plants" },
    {
      name: "description",
      content:
        "Discover the perfect plant for home or garden, from low-maintence to exotic -  safely delivered to your door!",
    },
  ];
}

export default function Home() {
  return <div>Home Page</div>;
}
