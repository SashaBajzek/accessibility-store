import { Close } from "../../SVGs/Close";
import "./EmptyCartContent.css";

interface EmptyCartContentProps {
  closeCart: () => void;
}

const EmptyCartContent = ({ closeCart }: EmptyCartContentProps) => {
  return (
    <div className="EmptyCartContent">
      <button className="close" onClick={closeCart}>
        <Close />
      </button>
      <h2 id="cart-heading">Your cart is empty</h2>
    </div>
  );
};

export default EmptyCartContent;
