import { useAppSelector } from "store/hooks";
import type { ProductItem } from "./types";

export function getProductData(id: number, category: string | undefined) {
  let product: ProductItem | undefined;

  if (category === "house-plants" || category === "garden-plants") {
    product = useAppSelector((state) => state.plantProducts).find(
      (product) => product.id === id
    );
  } else if (category === "pots-and-planters") {
    product = useAppSelector((state) => state.potsPlantersProducts).find(
      (product) => product.id === id
    );
  }

  if (!product) {
    return null;
  }

  return product;
}

export function getPrice(
  id: number,
  category: string | undefined,
  option: string
) {
  const productData = getProductData(id, category);

  if (productData) {
    const productOption = productData.options.find(
      (item) => item.option === option
    );
    if (productOption) {
      return productOption;
    }
  }
  return null;
}

export function constructImgPath(category: string, image: string) {
  return `/products/${category}/${image}`;
}

export function constructAltText(name: string) {
  return `The image of ${name}`;
}

export function constructURLPath(id: number, category: string) {
  return `/products/${category}/${id}`;
}
