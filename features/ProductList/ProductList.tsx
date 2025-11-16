import ProductCard from "../ProductCard";
import { useAppSelector } from "store/hooks";
import type { ProductItem } from "common/types";

export default function ProductList({ category }: { category: string }) {
  let productData;

  if (category === "pots-and-planters") {
    // get the tools slice
    productData = useAppSelector((state) => state.potsPlantersProducts);
  } else {
    //filter plants by category
    productData = useAppSelector((state) => state.plantProducts).filter(
      (product) => product.category === category
    );
  }

  let content = <p> No items have been found for this category!</p>;

  if (productData && productData.length > 0) {
    //sort in stock items first
    let inStock: ProductItem[] = [];
    let outOfStock: ProductItem[] = [];
    productData.map((product) => {
      const maxQuantity = product.options.reduce(
        (prevMax, curr) => (curr.quantity > prevMax ? curr.quantity : prevMax),
        0
      );
      if (maxQuantity > 0) {
        inStock.push(product);
      } else {
        outOfStock.push(product);
      }
    });

    const products = inStock.concat(outOfStock);

    content = (
      <ul className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <li className="product-card empty"></li>
        <li className="product-card empty"></li>
        <li className="product-card empty"></li>
      </ul>
    );
  }

  return <>{content}</>;
}
