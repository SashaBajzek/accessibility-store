import "./Input.css";

export enum InputType {
  Email = "email",
  Number = "number",
  Tel = "tel",
  Text = "text",
}

export enum AutoCompleteType {
  Billing = "billing",
  CCExp = "cc-exp",
  CCName = "cc-name",
  CCNumber = "cc-number",
  CCSecurity = "cc-csc",
  City = "address-level2",
  Email = "email",
  Name = "name",
  PostalCode = "postal-code",
  Shipping = "shipping",
  State = "address-level1",
  StreetAddress = "street-address",
  StreetAddress2 = "address-line2",
  Tel = "tel",
}

interface InputProps {
  autoComplete?: AutoCompleteType;
  label: string;
  onClick?: () => void;
  optional?: boolean;
  type?: InputType;
}

const Input = ({
  autoComplete,
  label,
  onClick,
  optional = false,
  type = InputType.Text,
}: InputProps) => {
  return (
    <div className="Input">
      <label htmlFor={label}>
        {label}
        {optional && " (optional)"}
      </label>
      <input
        autoComplete={autoComplete}
        id={label}
        name={label}
        type={type}
      ></input>
    </div>
  );
};

export default Input;
