import "./ConfirmationPage.css";
import { Link } from "react-router-dom";
import Page from "../Page/Page";

export default function ConfirmationPage() {
  return (
    <Page
      className="ConfirmationPage"
      heading="Hooray! Your order has been placed."
      title="Order Confirmation"
    >
      <div>Your order number is P12345678.</div>
      <div>A confirmation email will be sent shortly to test@gmail.com.</div>
      <Link to="/" className="continue-shopping">
        Continue Shopping
      </Link>
    </Page>
  );
}
