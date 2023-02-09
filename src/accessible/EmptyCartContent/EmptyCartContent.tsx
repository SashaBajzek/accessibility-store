import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Close } from "../../SVGs/Close";
import IconButton, { IconButtonVariant } from "../IconButton/IconButton";
import "./EmptyCartContent.css";

interface EmptyCartContentProps {
  closeCart: () => void;
}

const EmptyCartContent = ({ closeCart }: EmptyCartContentProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className="EmptyCartContent">
      <h2 id="cart-heading" ref={headingRef} tabIndex={-1}>
        Your cart is empty
      </h2>
      <IconButton
        ariaLabel="Close cart"
        className="close"
        icon={<Close />}
        onClick={closeCart}
        variant={IconButtonVariant.Large}
      />
      <Link to="/" className="continue-shopping" onClick={closeCart}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCartContent;
