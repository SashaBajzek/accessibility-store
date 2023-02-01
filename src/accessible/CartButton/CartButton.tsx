import { ShoppingBag } from "../../SVGs/ShoppingBag";
import "./CartButton.css";

interface CartButtonProps {
  cartQuantity: number;
  openCart: () => void;
}

const CartButton = ({ cartQuantity, openCart }: CartButtonProps) => {
  const ariaLabel = `Cart ${
    cartQuantity === 1 ? "1 item" : `${cartQuantity} items`
  }`;

  return (
    <button
      aria-label={ariaLabel}
      aria-haspopup="dialog"
      className="CartButton"
      onClick={openCart}
    >
      <ShoppingBag />
      {cartQuantity > 0 && (
        <>
          <div aria-hidden="true" className="quantity">
            {cartQuantity}
          </div>
        </>
      )}
    </button>
  );
};

export default CartButton;
