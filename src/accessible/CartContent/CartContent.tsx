import { useContext, useEffect, useRef } from "react";
import { Close } from "../../SVGs/Close";
import { CartContext } from "../../context/CartContext";
import SubmitButton, { ButtonVariant } from "../SubmitButton/SubmitButton";
import "./CartContent.css";
import IconButton, { IconButtonVariant } from "../IconButton/IconButton";
import CartTable from "../CartTable/CartTable";

interface CartContentProps {
  checkout: () => void;
  closeCart: () => void;
}

const CartContent = ({ checkout, closeCart }: CartContentProps) => {
  const { totalCost } = useContext(CartContext);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className="CartContent" ref={cartRef}>
      <div className="heading">
        <h2 id="cart-heading" ref={headingRef} tabIndex={-1}>
          Your cart
        </h2>
        <IconButton
          ariaLabel="Close cart"
          className="close"
          icon={<Close />}
          onClick={closeCart}
          variant={IconButtonVariant.Large}
        />
      </div>
      <CartTable checkout={checkout} closeCart={closeCart} />
      <div className="total-container">
        <div className="label">Total</div>
        <div className="number">${totalCost}</div>
      </div>
      <SubmitButton
        onSubmit={checkout}
        text="Checkout"
        variant={ButtonVariant.Primary}
      />
    </div>
  );
};

export default CartContent;
