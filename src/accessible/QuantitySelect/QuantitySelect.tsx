import { useEffect, useState } from "react";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import "./QuantitySelect.css";

interface QuantitySelectProps {
  maxQuantity: number;
  minQuantity: number;
  onChange: (quantity: number) => void;
  quantity: number;
}

const QuantitySelect = ({
  maxQuantity,
  minQuantity,
  onChange,
  quantity,
}: QuantitySelectProps) => {
  const [options, setOptions] = useState<number[]>([]);

  useEffect(() => {
    const newOptions: number[] = [];
    for (let i = minQuantity; i <= maxQuantity; i++) {
      newOptions.push(i);
    }
    setOptions(newOptions);
  }, [maxQuantity, minQuantity]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value, 10);
    onChange(value);
  };

  return (
    <>
      {options.length > 0 ? (
        <>
          <VisuallyHidden>
            <label htmlFor="quantity-select">Quantity</label>
          </VisuallyHidden>
          <select
            className="QuantitySelect"
            id="quantity-select"
            required
            onChange={handleChange}
            value={quantity}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </>
      ) : null}
    </>
  );
};

export default QuantitySelect;
