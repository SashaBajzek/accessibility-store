import { Size } from "../../inventory";
import { Select } from "../Select/Select";

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
  const handleChange = (valueString: string) => {
    let valueEnum: Size;
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
    <Select
      label="Length"
      name="size"
      onChange={handleChange}
      options={getEnumKeys(Size).map((key) => Size[key])}
      value={size}
    />
  );
};
