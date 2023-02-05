import Page from "../Page/Page";
import "./CheckoutPage.css";

export default function CheckoutPage() {
  return (
    <Page className="CheckoutPage" heading="Checkout" title="Checkout">
      <form>
        <label>
          Name
          <input required></input>
        </label>
        <label>
          Address
          <input required></input>
        </label>
        <button>Submit</button>
      </form>
    </Page>
  );
}
