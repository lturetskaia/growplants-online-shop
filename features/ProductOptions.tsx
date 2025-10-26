import type { ProductOption } from "common/types";

export default function ProductOptions({
  productOptions,
  currOption,
  handleChooseOption,
}: {
  productOptions: ProductOption[];
  currOption: string;
  handleChooseOption: Function;
}) {


  return (
    <ul className="product-options">
      {productOptions.map((item) => (
        <li
          className={item.option === currOption?"product-option-item active":"product-option-item"}
          key={item.option}
          onClick={() => handleChooseOption(item.option)}
        >
          {item.option}
        </li>
      ))}
      {/* Empty list items for proper styling */}
      <li className="product-option-item empty"></li>
      <li className="product-option-item empty"></li>
      <li className="product-option-item empty"></li>
    </ul>
  );
}
