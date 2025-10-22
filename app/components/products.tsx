import ProductCard from "./productCard";
import productList from "../../backend/data/productList";

export default function Products() {
  return (
    <ul className="products">
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          isStock={product.isStock}
          image={product.image}
        />
      ))}
      <li className="product-card empty"></li>
      <li className="product-card empty"></li>
      <li className="product-card empty"></li>
    </ul>
  );
}
