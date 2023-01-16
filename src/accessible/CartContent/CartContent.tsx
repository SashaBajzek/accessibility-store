import { useContext } from "react";
import { CartContext } from "../../App";
import { Close } from "../../SVGs/Close";
import { Trash } from "../../SVGs/Trash";
import QuantitySelect from "../QuantitySelect/QuantitySelect";
import SubmitButton, { ButtonVariant } from "../SubmitButton/SubmitButton";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import "./CartContent.css";

interface CartContentProps {
  checkout: () => void;
  closeCart: () => void;
}

const CartContent = ({ checkout, closeCart }: CartContentProps) => {
  const { cart, removeItem, totalCost, updateItemQuantity } =
    useContext(CartContext);
  return (
    <div className="CartContent">
      <div className="heading">
        <h2 id="cart-heading">Your cart</h2>
        <button className="close" onClick={closeCart}>
          <Close />
        </button>
      </div>
      <form method="dialog">
        <table>
          <thead>
            <tr>
              <th>
                <VisuallyHidden>Product Image</VisuallyHidden>
              </th>
              <th>Product</th>
              <th>
                <VisuallyHidden>Quantity</VisuallyHidden>
              </th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem) => (
              <tr key={cartItem.item.id}>
                <td>
                  {cartItem.item.images ? (
                    <img
                      alt={cartItem.item.images[0].description}
                      className="image"
                      src={`${process.env.PUBLIC_URL}/assets/${cartItem.item.images[0].fileName}`}
                    ></img>
                  ) : (
                    <div>LoadingImage</div>
                  )}
                </td>
                <td>
                  <div>{cartItem.item.name}</div>
                  <div>${cartItem.item.price}</div>
                </td>
                <td>
                  <div className="quantity-container">
                    <QuantitySelect
                      maxQuantity={Math.max(cartItem.quantity, 10)}
                      minQuantity={0}
                      onChange={(newQuantity: number) => {
                        updateItemQuantity({
                          item: cartItem.item,
                          quantity: newQuantity,
                        });
                      }}
                      quantity={cartItem.quantity}
                    />
                    <button
                      aria-label={`Remove ${cartItem.item.name} braceletfrom cart`}
                      className="remove-button"
                      onClick={() => removeItem(cartItem)}
                    >
                      <Trash />
                    </button>
                  </div>
                </td>
                <td>${cartItem.item.price * cartItem.quantity}</td>
              </tr>
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
