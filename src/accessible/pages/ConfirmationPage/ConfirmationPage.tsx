import { useContext, useEffect } from "react";
import { SetTitleContext } from "../../../context/SetTitleContext";
import "./ConfirmationPage.css";
import { Link } from "react-router-dom";

export default function ConfirmationPage() {
  const { setTitle } = useContext(SetTitleContext);
  useEffect(() => {
    setTitle("Order Confirmation");
  }, [setTitle]);

  return (
    <div className="ConfirmationPage">
      <h1>Hooray! Your order has been placed.</h1>
      <div>Your order number is P12345678.</div>
      <div>A confirmation email will be sent shortly to test@gmail.com.</div>
      <Link to="/" className="continue-shopping">
        Continue Shopping
      </Link>
    </div>
  );
}
