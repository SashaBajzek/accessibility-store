import "./ShippingMethod.css";

const monthNames = [
  "Jan",
  " Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const getFormattedDate = (date: Date) =>
  `${monthNames[date.getMonth()]} ${date.getDate()}`;

interface ShippingMethodProps {
  onChange: (value: number) => void;
}

const ShippingMethod = ({ onChange }: ShippingMethodProps) => {
  const radioGroupName = "shipping-method";
  const now = new Date();

  const priorityRange = `${getFormattedDate(
    addDays(now, 5)
  )} - ${getFormattedDate(addDays(now, 8))}`;

  const expressRange = `${getFormattedDate(
    addDays(now, 3)
  )} - ${getFormattedDate(addDays(now, 5))}`;

  return (
    <fieldset className="ShippingMethod" role="radiogroup">
      <legend>Shipping method</legend>
      <div className="items">
        <p>
          <input
            id="priority"
            name={radioGroupName}
            onChange={() => onChange(0)}
            type="radio"
          />
          <label htmlFor="priority">
            <span>
              <div className="title">USPS Priority Mail Estimated Delivery</div>
              <div>Estimated Delivery: {priorityRange}</div>
            </span>
            <span className="price">FREE</span>
          </label>
        </p>
        <p>
          <input
            id="express"
            name={radioGroupName}
            onChange={() => onChange(25)}
            type="radio"
          />
          <label htmlFor="express">
            <span>
              <div className="title">USPS Priority Mail Express</div>
              <div>Estimated Delivery: {expressRange}</div>
            </span>
            <span className="price">$25.00</span>
          </label>
        </p>
      </div>
    </fieldset>
  );
};

export default ShippingMethod;
