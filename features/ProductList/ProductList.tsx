import type { RootState } from "store/reduxStore";
import ProductCard from "../ProductCard";
import { useAppSelector } from "store/hooks";

export default function ProductList({ category }: { category: string }) {
  let productData;

  if (category === "pots-and-planters") {
    // get the tools slice
    productData = useAppSelector((state:RootState)=> state.potsPlantersProducts)
  } else {
    //filter plants by category
    productData = useAppSelector(
      (state: RootState) => state.plantProducts
    ).filter((product) => product.category === category);
  }

  let content = <p> No items have been found for this category!</p>;

  if (productData && productData.length > 0) {
    content = (
      <ul className="products">
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            isStock={product.isStock}
            image={product.image}
            category={product.category}
          />
        ))}
        <li className="product-card empty"></li>
        <li className="product-card empty"></li>
        <li className="product-card empty"></li>
      </ul>
    );
  }

  return <>{content}</>;
}
