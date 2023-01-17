import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import { CartItem } from "../../cartUtils";
import { Trash } from "../../SVGs/Trash";
import QuantitySelect from "../QuantitySelect/QuantitySelect";
import "./CartRow.css";

interface CartRowProps {
  cartItem: CartItem;
  closeCart: () => void;
}

const CartRow = ({ cartItem, closeCart }: CartRowProps) => {
  const { removeItem, updateItemQuantity } = useContext(CartContext);
  return (
    <tr className="CartRow">
      <td className="product-col">
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
        <div>
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
      <td>
        <div>${cartItem.item.price}</div>
      </td>
      <td>
        <QuantitySelect
          maxQuantity={Math.max(cartItem.quantity, 10)}
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
      <td className="total-cell">${cartItem.item.price * cartItem.quantity}</td>
      <td>
        <button
          aria-label={`Remove ${cartItem.item.name} braceletfrom cart`}
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
