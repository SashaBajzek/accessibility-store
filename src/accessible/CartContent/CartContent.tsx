import { Close } from "../../SVGs/Close";
import SubmitButton, { ButtonVariant } from "../SubmitButton/SubmitButton";
import "./CartContent.css";

interface CartContentProps {
  checkout: () => void;
  closeCart: () => void;
}

const CartContent = ({ checkout, closeCart }: CartContentProps) => {
  return (
    <div className="CartContent">
      <div className="heading">
        <h2 id="cart-heading">Your cart</h2>
        <button className="close" onClick={closeCart}>
          <Close />
        </button>
      </div>
      <form method="dialog"></form>
      <SubmitButton
        onSubmit={checkout}
        text="Checkout"
        variant={ButtonVariant.Primary}
      />
    </div>
  );
};

export default CartContent;
