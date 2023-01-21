import { useContext } from "react";
import { Close } from "../../SVGs/Close";
import CartRow from "../CartRow/CartRow";
import { CartContext } from "../../context/CartContext";
import SubmitButton, { ButtonVariant } from "../SubmitButton/SubmitButton";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import "./CartContent.css";

interface CartContentProps {
  checkout: () => void;
  closeCart: () => void;
}

const CartContent = ({ checkout, closeCart }: CartContentProps) => {
  const { cart, totalCost } = useContext(CartContext);
  return (
    <div className="CartContent">
      <div className="heading">
        <h2 id="cart-heading">Your cart</h2>
        <button aria-label="Close cart" className="close" onClick={closeCart}>
          <Close />
        </button>
      </div>
      <form method="dialog">
        <table>
          <thead>
            <tr>
              <th className="product-heading">Product</th>
              <th>
                <VisuallyHidden>Price</VisuallyHidden>
              </th>
              <th>
                <VisuallyHidden>Quantity</VisuallyHidden>
              </th>
              <th className="total-heading">Total</th>
              <th>
                <VisuallyHidden>Remove</VisuallyHidden>
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem) => (
              <CartRow
                cartItem={cartItem}
                closeCart={closeCart}
                key={cartItem.item.id + cartItem.size}
              />
            ))}
          </tbody>
        </table>
      </form>
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
