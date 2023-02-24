import { useCallback, useContext, useRef, useState } from "react";
import CartRow from "../CartRow/CartRow";
import { CartContext } from "../../context/CartContext";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import "./CartTable.css";

interface CartTableProps {
  checkout?: () => void;
  closeCart?: () => void;
}

const CartTable = ({ closeCart }: CartTableProps) => {
  const { cart } = useContext(CartContext);
  const cartRef = useRef<HTMLDivElement>(null);

  const [focusId, setFocusId] = useState<number | null>(null);

  const focusAfterRemove = useCallback(
    (removedId: number) => {
      // Make sure focus is in the cart
      if (!cartRef?.current?.contains(document.activeElement)) {
        return;
      }

      const cartSize = cart.length;
      if (cartSize === 1) {
        setFocusId(null);
        return;
      }
      if (removedId === cartSize - 1) {
        setFocusId(removedId - 1);
      } else {
        setFocusId(removedId);
      }
    },
    [cart.length]
  );

  return (
    <div className="CartTable">
      <table role="table">
        <thead>
          <tr role="row">
            <th
              className="product-heading"
              id="CartTable-product-heading"
              role="columnheader"
              scope="col"
            >
              Product
            </th>
            <th
              className="visually-hidden"
              id="CartTable-price-heading"
              role="columnheader"
            >
              <VisuallyHidden>Price</VisuallyHidden>
            </th>
            <th
              className="visually-hidden"
              id="CartTable-quantity-heading"
              role="columnheader"
            >
              <VisuallyHidden>Quantity</VisuallyHidden>
            </th>
            <th
              className="total-heading"
              id="CartTable-total-heading"
              role="columnheader"
              scope="col"
            >
              Total
            </th>
            <th
              className="visually-hidden"
              id="CartTable-remove-heading"
              role="columnheader"
            >
              <VisuallyHidden>Remove</VisuallyHidden>
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem, index) => (
            <CartRow
              cartItem={cartItem}
              clearFocus={() => setFocusId(null)}
              closeCart={closeCart}
              focus={focusId === index}
              focusAfterRemove={focusAfterRemove}
              key={cartItem.item.id + cartItem.size}
            />
          ))}
        </tbody>
      </table>{" "}
    </div>
  );
};

export default CartTable;
