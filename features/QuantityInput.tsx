export default function QuantityInput({
  userQuantity,
  maxQuantity,
  handleChangeQuantity,
}: {
  userQuantity: number;
  maxQuantity: number;
  handleChangeQuantity: Function;
}) {
  return (
    <div className="quantity-input">
      <button
        onClick={() => handleChangeQuantity("decrement")}
        className={userQuantity > 0 ? "" : "disabled"}
      >
        {" "}
        &ndash;
      </button>
      <input
        type="number"
        min="1"
        max={maxQuantity}
        step="1"
        value={userQuantity}
        readOnly
      />
      <button
        onClick={() => handleChangeQuantity("increment")}
        className={userQuantity < maxQuantity ? "" : "disabled"}
      >
        +
      </button>
    </div>
  );
}
