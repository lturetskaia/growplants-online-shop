import ProductCard from "./product-card";
// import productData from "../../backend/data/products.json"
import productList from "./productList";

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
    </ul>
  );
}
