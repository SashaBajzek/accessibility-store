import { useState } from "react";
import "./QuantityPicker.css";

interface QuantityPickerProps {
  minQuantity: number;
  quantity: number;
  setQuantity: (setQuantity: number) => void;
}

const QuantityPicker = ({
  minQuantity,
  quantity,
  setQuantity,
}: QuantityPickerProps) => {
  const decrement = () => {
    setQuantity(Math.max(minQuantity, quantity - 1));
  };

  const increment = () => {
    setQuantity(quantity + 1);
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
    <div className="QuantityPicker">
      <label htmlFor="quantity">Quantity</label>
      <div className="picker">
        <button onClick={decrement}>-</button>
        <input
          id="quantity"
          min="1"
          name="quantity"
          onChange={handleChange}
          type="number"
          value={quantity}
        />
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default QuantityPicker;
