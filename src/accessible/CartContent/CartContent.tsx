import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Close } from "../../SVGs/Close";
import CartRow from "../CartRow/CartRow";
import { CartContext } from "../../context/CartContext";
import SubmitButton, { ButtonVariant } from "../SubmitButton/SubmitButton";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import "./CartContent.css";
import IconButton, { IconButtonVariant } from "../IconButton/IconButton";

interface CartContentProps {
  checkout: () => void;
  closeCart: () => void;
}

const CartContent = ({ checkout, closeCart }: CartContentProps) => {
  const { cart, totalCost } = useContext(CartContext);
  const headingRef = useRef<HTMLHeadingElement>(null);
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

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className="CartContent" ref={cartRef}>
      <div className="heading">
        <h2 id="cart-heading" ref={headingRef} tabIndex={-1}>
          Your cart
        </h2>
        <IconButton
          ariaLabel="Close cart"
          className="close"
          icon={<Close />}
          onClick={closeCart}
          variant={IconButtonVariant.Large}
        />
      </div>
      <div className="form">
        <table role="table">
          <thead>
            <tr role="row">
              <th
                className="product-heading"
                id="CartContent-product-heading"
                role="columnheader"
                scope="col"
              >
                Product
              </th>
              <th
                className="visually-hidden"
                id="CartContent-price-heading"
                role="columnheader"
              >
                <VisuallyHidden>Price</VisuallyHidden>
              </th>
              <th
                className="visually-hidden"
                id="CartContent-quantity-heading"
                role="columnheader"
              >
                <VisuallyHidden>Quantity</VisuallyHidden>
              </th>
              <th
                className="total-heading"
                id="CartContent-total-heading"
                role="columnheader"
                scope="col"
              >
                Total
              </th>
              <th
                className="visually-hidden"
                id="CartContent-remove-heading"
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
        </table>
      </div>
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
