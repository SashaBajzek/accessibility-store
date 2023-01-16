import { ShoppingBag } from "../../SVGs/ShoppingBag";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
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
      <VisuallyHidden>Cart</VisuallyHidden>
      {cartQuantity > 0 && (
        <>
          <div aria-hidden="true" className="quantity">
            {cartQuantity}
          </div>
          <VisuallyHidden>
            {cartQuantity === 1 ? "1 item" : `${cartQuantity} items`}
          </VisuallyHidden>
        </>
      )}
    </button>
  );
};

export default CartButton;
