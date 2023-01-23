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
        <table role="table">
          <thead role="rowgroup">
            <tr role="row">
              <th className="product-heading" role="columnheader">
                Product
              </th>
              <th className="visually-hidden" role="columnheader">
                <VisuallyHidden>Price</VisuallyHidden>
              </th>
              <th className="visually-hidden" role="columnheader">
                <VisuallyHidden>Quantity</VisuallyHidden>
              </th>
              <th className="total-heading" role="columnheader">
                Total
              </th>
              <th className="visually-hidden" role="columnheader">
                <VisuallyHidden>Remove</VisuallyHidden>
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
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
