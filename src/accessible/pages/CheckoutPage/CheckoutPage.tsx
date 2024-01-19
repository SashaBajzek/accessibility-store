import CartTable from "../../CartTable/CartTable";
import Page from "../Page/Page";
import "./CheckoutPage.css";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import Input, { AutoCompleteType, InputType } from "../../Input/Input";
import SubmitButton, { ButtonVariant } from "../../SubmitButton/SubmitButton";
import { Select } from "../../Select/Select";
import { statesList } from "./states";

export default function CheckoutPage() {
  const { totalCost } = useContext(CartContext);
  const [shippingState, setShippingState] = useState("");
  return (
    <Page className="CheckoutPage" heading="Checkout" title="Checkout">
      <div className="container">
        <form>
          <h2>Contact</h2>
          <Input label="Email" type={InputType.Email} />
          <Input
            autoComplete={AutoCompleteType.Tel}
            label="Phone"
            optional={true}
            type={InputType.Tel}
          />
          <h2>Delivery</h2>
          <Input
            autoComplete={AutoCompleteType.Name}
            label="Full name"
            type={InputType.Text}
          />
          <Input
            autoComplete={AutoCompleteType.StreetAddress}
            label="Street address"
            type={InputType.Text}
          />
          <Input
            autoComplete={AutoCompleteType.StreetAddress2}
            label="Apartment, suite, etc"
            optional={true}
            type={InputType.Text}
          />
          <div className="inline-fields-3">
            <Input
              autoComplete={AutoCompleteType.City}
              label="City"
              type={InputType.Text}
            />
            <Select
              autoComplete={AutoCompleteType.State}
              label="State"
              onChange={setShippingState}
              options={statesList}
              value={shippingState}
            />
            <Input
              autoComplete={AutoCompleteType.PostalCode}
              label="ZIP code"
              type={InputType.Number}
            />
          </div>
          <h3>Shipping method</h3>
          Radio Group Same day expendiated
          <h2>Payment</h2>
          <Input
            autoComplete={AutoCompleteType.CCNumber}
            label="Card number"
            type={InputType.Number}
          />
          <div className="inline-fields-2">
            <Input
              autoComplete={AutoCompleteType.CCExp}
              label="Expiration date (MM / YY)"
              type={InputType.Number}
            />
            <Input
              autoComplete={AutoCompleteType.CCSecurity}
              label="Security code"
              type={InputType.Number}
            />
          </div>
          <Input
            autoComplete={AutoCompleteType.CCName}
            label="Cardholder name"
            type={InputType.Text}
          />
          <div>Billing address</div>
          Radio Group Same as shipping address or Use a different billing
          address
          <br />
          <SubmitButton
            onSubmit={() => {}}
            text="Pay now"
            variant={ButtonVariant.Primary}
          />
        </form>

        <div className="cart-column">
          <h2>Order summary</h2>
          <CartTable />
          <div>Subtotal: ${totalCost}</div>Shipping: Total:
        </div>
      </div>
    </Page>
  );
}
