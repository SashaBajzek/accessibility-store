import { AutoCompleteType } from "../Input/Input";
import "./Select.css";

interface SelectProps<T> {
  autoComplete?: AutoCompleteType;
  label: string;
  isLabelVisible?: boolean;
  name: string;
  onChange: (valueString: T) => void;
  options: any[];
  value: T;
}

export const Select = ({
  autoComplete,
  label,
  isLabelVisible = true,
  name,
  onChange,
  options,
  value,
}: SelectProps<any>) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  const id = `select-${label}`;

  return (
    <div className="Select">
      {isLabelVisible && <label htmlFor={id}>{label}</label>}
      <div className="select-styled">
        <select
          aria-label={isLabelVisible ? "" : label}
          autoComplete={autoComplete}
          id={id}
          name={name}
          onChange={handleChange}
          value={value}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
