import type { Route } from "../+types/root";
import CategoryList from "features/CategoryList";

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
  return (
    <>
      <div id="hero-section">
        <img id="hero-image" src="/common/hero-image.jpg" alt="" />
        <div id="hero-description">
          <h1>Green spaces for a fuller life</h1>
          <p>Shop Indoor, Outdoor Plants & Accessories</p>
        </div>
      </div>

      <main>
        <CategoryList />
      </main>
    </>
  );
}
