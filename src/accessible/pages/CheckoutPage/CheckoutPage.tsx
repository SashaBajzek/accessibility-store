import CartTable from "../../CartTable/CartTable";
import Page from "../Page/Page";
import "./CheckoutPage.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function CheckoutPage() {
  const { totalCost } = useContext(CartContext);
  return (
    <Page className="CheckoutPage" heading="Checkout" title="Checkout">
      <div className="container">
        <form>
          <h2>Contact information</h2>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email"></input>
          <br />
          <h2>Shipping Address</h2>
          <label htmlFor="firstName">First name:</label>
          <input type="text" name="firstName" id="firstName" /> <br />
          <label htmlFor="lastName">Last name:</label>
          <input type="text" name="lastName" id="lastName" /> <br />
          <label>
            Address
            <input required></input>
          </label>
          <br />
          <label htmlFor="apartment">Apartment, suite, etc (optional)</label>
          <input type="text" name="apartment" id="apartment" /> <br />
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" /> <br />
          <label htmlFor="state">State</label>
          <input type="text" name="state" id="state" /> <br />
          <label htmlFor="zip">ZIP Code</label>
          <input type="text" name="zip" id="zip" /> <br />
          <label htmlFor="phone">Phone (optional)</label>
          <input type="tel" name="phone" id="phone" /> <br />
          <h3>Method</h3>
          Radio Group Same day expendiated
          <h2>Payment</h2>
          <label htmlFor="cardNumber">Card number</label>
          <input type="number" name="cardNumber" id="cardNumber" /> <br />
          <label htmlFor="fullName">Cardholder Name</label>
          <input type="text" name="fullName" id="fullName" /> <br />
          <label htmlFor="expire">Expiration date (MM / YY)</label>
          <input type="number" name="expire" id="expire" /> <br />
          <label htmlFor="security">Security code</label>
          <input type="number" name="security" id="security" /> <br />
          <div>Billing address</div>
          Radio Group Same as shipping address or Use a different billing
          address
          <br />
          <button>Pay now</button>
        </form>
        <div className="cart-column">
          <CartTable />
          <div>Subtotal: ${totalCost}</div>Shipping: Total:
        </div>
      </div>
    </Page>
  );
}
