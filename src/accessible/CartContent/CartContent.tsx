import { useContext } from "react";
import { CartContext } from "../../App";
import { getTotal } from "../../cartUtils";
import { Close } from "../../SVGs/Close";
import SubmitButton, { ButtonVariant } from "../SubmitButton/SubmitButton";
import "./CartContent.css";

interface CartContentProps {
  checkout: () => void;
  closeCart: () => void;
}

const CartContent = ({ checkout, closeCart }: CartContentProps) => {
  const { cart } = useContext(CartContext);
  return (
    <div className="CartContent">
      <div className="heading">
        <h2 id="cart-heading">Your cart</h2>
        <button className="close" onClick={closeCart}>
          <Close />
        </button>
      </div>
      <form method="dialog"></form>
      <div>Total ${getTotal(cart)}</div>
      <SubmitButton
        onSubmit={checkout}
        text="Checkout"
        variant={ButtonVariant.Primary}
      />
    </div>
  );
};

export default CartContent;
