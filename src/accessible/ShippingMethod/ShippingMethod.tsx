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

export enum ShippingMethodTypes {
  Express = 25,
  Priority = 0,
}

const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const getFormattedDate = (date: Date) =>
  `${monthNames[date.getMonth()]} ${date.getDate()}`;

interface ShippingMethodProps {
  name: string;
  onChange: (event: any) => void;
  value?: ShippingMethodTypes;
}

const ShippingMethod = ({ name, onChange, value }: ShippingMethodProps) => {
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
            checked={value == ShippingMethodTypes.Priority}
            id="priority"
            name={name}
            onChange={onChange}
            type="radio"
            value={ShippingMethodTypes.Priority}
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
            checked={value == ShippingMethodTypes.Express}
            id="express"
            name={name}
            onChange={onChange}
            type="radio"
            value={ShippingMethodTypes.Express}
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
