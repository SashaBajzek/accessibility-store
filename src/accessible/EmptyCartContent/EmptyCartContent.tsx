import { Close } from "../../SVGs/Close";
import "./EmptyCartContent.css";

interface EmptyCartContentProps {
  closeCart: () => {};
}

const EmptyCartContent = ({ closeCart }: EmptyCartContentProps) => {
  return (
    <div className="EmptyCartContent">
      <div className="heading">
        <h2 id="cart-heading">Your cart is empty</h2>
        <button className="close" onClick={closeCart}>
          <Close />
        </button>
      </div>
    </div>
  );
};

export default EmptyCartContent;
