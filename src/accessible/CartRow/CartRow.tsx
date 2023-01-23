import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartItem, getAvailableQuantity } from "../../cartUtils";
import { Trash } from "../../SVGs/Trash";
import { CartContext } from "../../context/CartContext";
import QuantitySelect from "../QuantitySelect/QuantitySelect";
import "./CartRow.css";

interface CartRowProps {
  cartItem: CartItem;
  closeCart: () => void;
}

const CartRow = ({ cartItem, closeCart }: CartRowProps) => {
  const { cart, removeItem, updateItemQuantity } = useContext(CartContext);
  const availableQuantity = getAvailableQuantity(cartItem, cart);
  return (
    <tr className="CartRow" role="row">
      <td
        className="product-cell"
        headers="CartContent-product-heading"
        role="cell"
      >
        <Link
          aria-hidden={true}
          to={"items/" + cartItem.item.id}
          onClick={closeCart}
          tabIndex={-1}
        >
          {cartItem.item.images ? (
            <img
              alt=""
              aria-hidden={true}
              className="image"
              src={`${process.env.PUBLIC_URL}/assets/${cartItem.item.images[0].fileName}`}
            ></img>
          ) : (
            <div>LoadingImage</div>
          )}
        </Link>
        <div className="text">
          <Link
            className="item-name"
            to={"items/" + cartItem.item.id}
            onClick={closeCart}
          >
            {cartItem.item.name}
          </Link>
          <div className="item-options">Length: {cartItem.size}</div>
        </div>
      </td>
      <td
        className="price-cell"
        headers="CartContent-price-heading"
        role="cell"
      >
        <div>${cartItem.item.price}</div>
      </td>
      <td
        className="quantity-cell"
        headers="CartContent-quantity-heading"
        role="cell"
      >
        <QuantitySelect
          itemName={cartItem.item.name}
          maxQuantity={Math.max(
            cartItem.quantity,
            cartItem.quantity + availableQuantity
          )}
          minQuantity={0}
          onChange={(newQuantity: number) => {
            updateItemQuantity({
              item: cartItem.item,
              quantity: newQuantity,
              size: cartItem.size,
            });
          }}
          quantity={cartItem.quantity}
        />
      </td>
      <td
        className="total-cell"
        headers="CartContent-total-heading"
        role="cell"
      >
        ${cartItem.item.price * cartItem.quantity}
      </td>
      <td
        className="remove-cell"
        headers="CartContent-remove-heading"
        role="cell"
      >
        <button
          aria-label={`Remove ${cartItem.item.name} bracelet from cart`}
          className="remove-button"
          onClick={() => removeItem(cartItem)}
        >
          <Trash />
        </button>
      </td>
    </tr>
  );
};

export default CartRow;
