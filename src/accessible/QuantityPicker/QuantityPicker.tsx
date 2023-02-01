import { Error } from "../../SVGs/Error";
import { Minus } from "../../SVGs/Minus";
import { Plus } from "../../SVGs/Plus";
import "./QuantityPicker.css";

interface QuantityPickerProps {
  error: string;
  itemName: string;
  maxQuantity: number;
  minQuantity: number;
  quantity: number;
  setQuantity: (setQuantity: number) => void;
}

const QuantityPicker = ({
  error,
  itemName,
  maxQuantity,
  minQuantity,
  quantity,
  setQuantity,
}: QuantityPickerProps) => {
  const decrement = () => {
    setQuantity(Math.max(minQuantity, quantity - 1));
  };

  const increment = () => {
    setQuantity(Math.min(maxQuantity, quantity + 1));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);

    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  return (
    <div className={`QuantityPicker ${error && "error"}`}>
      <label htmlFor="quantity">Quantity</label>
      <div className="picker">
        <button
          aria-label={`Decrement quantity of ${itemName}`}
          onClick={decrement}
        >
          <Minus />
        </button>
        <input
          aria-errormessage="helper-error"
          aria-describedby={error ? "" : "helper"}
          aria-invalid={!!error}
          id="quantity"
          max={maxQuantity}
          min={minQuantity}
          name="quantity"
          onChange={handleChange}
          type="number"
          value={quantity}
        />
        <button
          aria-label={`Increment quantity of ${itemName}`}
          onClick={increment}
        >
          <Plus />
        </button>
      </div>
      {error ? (
        <div className="error" id="helper-error" role="alert">
          <Error />
          <div className="text"> {error}</div>
        </div>
      ) : (
        <div className="helper" id="helper">
          {maxQuantity} in stock
        </div>
      )}
    </div>
  );
};

export default QuantityPicker;
