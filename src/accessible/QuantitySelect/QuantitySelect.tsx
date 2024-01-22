import { useEffect, useState } from "react";
import { Select } from "../Select/Select";

interface QuantitySelectProps {
  itemName: string;
  maxQuantity: number;
  minQuantity: number;
  onChange: (quantity: number) => void;
  quantity: number;
}

const QuantitySelect = ({
  itemName,
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

  const handleChange = (valueString: string) => {
    const value = parseInt(valueString, 10);
    onChange(value);
  };

  return (
    <>
      {options.length > 0 ? (
        <Select
          isLabelVisible={false}
          label={`Quantity of ${itemName}`}
          name={`${itemName}-quantity`}
          onChange={handleChange}
          options={options}
          value={quantity}
        />
      ) : null}
    </>
  );
};

export default QuantitySelect;
