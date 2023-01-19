import { Link } from "react-router-dom";
import { Close } from "../../SVGs/Close";
import "./EmptyCartContent.css";

interface EmptyCartContentProps {
  closeCart: () => void;
}

const EmptyCartContent = ({ closeCart }: EmptyCartContentProps) => {
  return (
    <div className="EmptyCartContent">
      <button aria-label="Close cart" className="close" onClick={closeCart}>
        <Close />
      </button>
      <h2 id="cart-heading">Your cart is empty</h2>
      <Link to="/" className="continue-shopping" onClick={closeCart}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCartContent;
