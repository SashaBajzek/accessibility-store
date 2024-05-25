import CartTable from "../../CartTable/CartTable";
import Page from "../Page/Page";
import "./CheckoutPage.css";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import Input, { AutoCompleteType, InputType } from "../../Input/Input";
import SubmitButton, { ButtonVariant } from "../../SubmitButton/SubmitButton";
import { Select } from "../../Select/Select";
import { statesList } from "./states";
import ShippingMethod, {
  ShippingMethodTypes,
} from "../../ShippingMethod/ShippingMethod";

interface Inputs {
  billingCity?: string;
  billingState?: string;
  billingStreetAddress1?: string;
  billingStreetAddress2?: string;
  billingZipcode?: string;
  ccExp?: number;
  ccName?: string;
  ccNumber?: number;
  ccSecurity?: number;
  email?: string;
  fullName?: string;
  phone?: number;
  sameBillingAddress: boolean;
  shippingCity?: string;
  shippingMethod: ShippingMethodTypes;
  shippingState?: string;
  shippingStreetAddress1?: string;
  shippingStreetAddress2?: string;
  shippingZipcode?: string;
}

export default function CheckoutPage() {
  const { totalCost } = useContext(CartContext);

  const [inputs, setInputs] = useState<Inputs>({
    sameBillingAddress: true,
    shippingMethod: ShippingMethodTypes.Priority,
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleBillingAddressChange = () => {
    setInputs((prevState) => ({
      ...prevState,
      sameBillingAddress: !inputs.sameBillingAddress,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <Page className="CheckoutPage" heading="Checkout" title="Checkout">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Contact</h2>
          <Input
            label="Email"
            name="email"
            onChange={handleChange}
            type={InputType.Email}
            value={inputs.email || ""}
          />
          <Input
            autoComplete={AutoCompleteType.Tel}
            label="Phone"
            name="phone"
            onChange={handleChange}
            optional={true}
            type={InputType.Tel}
            value={inputs.phone || ""}
          />
          <h2>Delivery</h2>
          <Input
            autoComplete={AutoCompleteType.Name}
            label="Full name"
            name="fullName"
            onChange={handleChange}
            type={InputType.Text}
            value={inputs.fullName || ""}
          />
          <Input
            autoComplete={AutoCompleteType.StreetAddress}
            label="Street address"
            name="shippingStreetAddress1"
            onChange={handleChange}
            type={InputType.Text}
            value={inputs.shippingStreetAddress1 || ""}
          />
          <Input
            autoComplete={AutoCompleteType.StreetAddress2}
            label="Apartment, suite, etc"
            name="shippingStreetAddress2"
            onChange={handleChange}
            optional={true}
            type={InputType.Text}
            value={inputs.shippingStreetAddress2 || ""}
          />
          <div className="inline-fields-3">
            <Input
              autoComplete={AutoCompleteType.City}
              label="City"
              name="shippingCity"
              onChange={handleChange}
              type={InputType.Text}
              value={inputs.shippingCity || ""}
            />
            <Select
              autoComplete={AutoCompleteType.State}
              label="State"
              name="shippingState"
              onChange={handleChange}
              options={statesList}
              value={inputs.shippingState || ""}
            />
            <Input
              autoComplete={AutoCompleteType.PostalCode}
              label="ZIP code"
              name="shippingZipcode"
              onChange={handleChange}
              type={InputType.Text}
              value={inputs.shippingZipcode || ""}
            />
          </div>
          <ShippingMethod
            name="shippingMethod"
            onChange={handleChange}
            value={inputs.shippingMethod}
          />
          <h2>Payment</h2>
          <Input
            autoComplete={AutoCompleteType.CCNumber}
            label="Card number"
            name="ccNumber"
            onChange={handleChange}
            type={InputType.Number}
            value={inputs.ccNumber || ""}
          />
          <div className="inline-fields-2">
            <Input
              autoComplete={AutoCompleteType.CCExp}
              label="Expiration date (MM / YY)"
              name="ccExp"
              onChange={handleChange}
              type={InputType.Text}
              value={inputs.ccExp || ""}
            />
            <Input
              autoComplete={AutoCompleteType.CCSecurity}
              label="Security code"
              name="ccSecurity"
              onChange={handleChange}
              type={InputType.Number}
              value={inputs.ccSecurity || ""}
            />
          </div>
          <Input
            autoComplete={AutoCompleteType.CCName}
            label="Cardholder name"
            name="ccName"
            onChange={handleChange}
            type={InputType.Text}
            value={inputs.ccName || ""}
          />
          <input
            checked={inputs.sameBillingAddress}
            onChange={handleBillingAddressChange}
            id="sameBillingAddress"
            name="sameBillingAddress"
            type="checkbox"
          />
          <label htmlFor="sameBillingAddress">
            Billing address same as shipping
          </label>
          {!inputs.sameBillingAddress && (
            <>
              <Input
                autoComplete={AutoCompleteType.StreetAddress}
                label="Street address"
                name="billingStreetAddress1"
                onChange={handleChange}
                type={InputType.Text}
                value={inputs.billingStreetAddress1 || ""}
              />
              <Input
                autoComplete={AutoCompleteType.StreetAddress2}
                label="Apartment, suite, etc"
                name="billingStreetAddress2"
                onChange={handleChange}
                optional={true}
                type={InputType.Text}
                value={inputs.billingStreetAddress2 || ""}
              />
              <div className="inline-fields-3">
                <Input
                  autoComplete={AutoCompleteType.City}
                  label="City"
                  name="billingCity"
                  onChange={handleChange}
                  type={InputType.Text}
                  value={inputs.billingCity || ""}
                />
                <Select
                  autoComplete={AutoCompleteType.State}
                  label="State"
                  name="billingState"
                  onChange={handleChange}
                  options={statesList}
                  value={inputs.billingState || ""}
                />
                <Input
                  autoComplete={AutoCompleteType.PostalCode}
                  label="ZIP code"
                  name="billingZipcode"
                  onChange={handleChange}
                  type={InputType.Text}
                  value={inputs.billingZipcode || ""}
                />
              </div>
            </>
          )}
          <SubmitButton
            onSubmit={() => {}}
            text="Pay now"
            variant={ButtonVariant.Primary}
          />
        </form>
        <div className="cart-column">
          <h2>Order summary</h2>
          <CartTable />
          <div className="total-row">
            <span>Subtotal:</span>
            <span>${totalCost}</span>
          </div>
          <div className="total-row">
            <span>Shipping:</span>
            <span>${Number(inputs.shippingMethod)}</span>
          </div>
          <div className="total-row final-total">
            <span>Total:</span>
            <span>${totalCost + Number(inputs.shippingMethod)}</span>
          </div>
        </div>
      </div>
    </Page>
  );
}
