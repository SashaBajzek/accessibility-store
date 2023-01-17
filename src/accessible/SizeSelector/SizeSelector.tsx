import { Size } from "../../inventory";
import "./SizeSelector.css";

interface SizeSelectorProps {
  onChange: (size: Size) => void;
  size: Size;
}

const getEnumKeys = <T extends Object>(
  enumToDeconstruct: T
): Array<keyof typeof enumToDeconstruct> => {
  return Object.keys(enumToDeconstruct) as Array<
    keyof typeof enumToDeconstruct
  >;
};

export const SizeSelector = ({ onChange, size }: SizeSelectorProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let valueEnum: Size;
    const valueString = event.target.value;
    if (valueString === Size.XSmall) {
      valueEnum = Size.XSmall;
    } else if (valueString === Size.Small) {
      valueEnum = Size.Small;
    } else if (valueString === Size.Medium) {
      valueEnum = Size.Medium;
    } else if (valueString === Size.Large) {
      valueEnum = Size.Large;
    } else if (valueString === Size.XLarge) {
      valueEnum = Size.XLarge;
    } else {
      valueEnum = Size.XXLarge;
    }
    onChange(valueEnum);
  };

  return (
    <div className="SizeSelector">
      <label htmlFor="size">Length</label>
      <select value={size} onChange={handleChange}>
        {getEnumKeys(Size).map((key, index) => (
          <option id="size" key={index} value={Size[key]}>
            {Size[key]}
          </option>
        ))}
      </select>
    </div>
  );
};
