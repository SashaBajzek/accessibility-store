import { useContext, useEffect } from "react";
import { SetTitleContext } from "../../../context/SetTitleContext";
import "./CheckoutPage.css";

export default function CheckoutPage() {
  const { setTitle } = useContext(SetTitleContext);
  useEffect(() => {
    setTitle("Checkout");
  }, [setTitle]);

  return (
    <div className="CheckoutPage">
      <h1>Checkout</h1>
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
    </div>
  );
}
