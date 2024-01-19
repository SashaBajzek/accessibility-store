import "./Select.css";

interface SelectProps<T> {
  label: string;
  isLabelVisible?: boolean;
  onChange: (valueString: T) => void;
  options: any[];
  value: T;
}

export const Select = ({
  label,
  isLabelVisible = true,
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
          id={id}
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
