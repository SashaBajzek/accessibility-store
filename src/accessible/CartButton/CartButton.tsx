import { ShoppingBag } from "../../SVGs/ShoppingBag";
import "./CartButton.css";

interface CartButtonProps {
  cartQuantity: number;
  openCart: () => void;
}

const CartButton = ({ cartQuantity, openCart }: CartButtonProps) => {
  return (
    <button
      aria-label="Cart"
      aria-haspopup="dialog"
      className="CartButton"
      onClick={openCart}
    >
      <ShoppingBag />
      {cartQuantity > 0 && cartQuantity}
    </button>
  );
};

export default CartButton;
