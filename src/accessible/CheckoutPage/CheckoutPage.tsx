import { useContext, useEffect } from "react";
import { SetTitleContext } from "../../App";

export default function CheckoutPage() {
  const { setTitle } = useContext(SetTitleContext);
  useEffect(() => {
    setTitle("Checkout");
  }, [setTitle]);

  return (
    <>
      <h1>Checkout</h1>
      <form>
        <input></input>
        <button>Submit</button>
      </form>
    </>
  );
}
