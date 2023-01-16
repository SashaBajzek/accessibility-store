import {
  forwardRef,
  MouseEvent,
  Ref,
  useImperativeHandle,
  useRef,
} from "react";
import { Close } from "../../SVGs/Close";
import SubmitButton, { ButtonVariant } from "../SubmitButton/SubmitButton";
import "./Cart.css";

const Cart = forwardRef<HTMLDialogElement>(
  (props, ref: Ref<{ showModal: () => void }>) => {
    const cartRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          // Only want parent to have access to showModal
          showModal() {
            cartRef.current?.showModal();
          },
        };
      },
      []
    );

    const closeCart = () => {
      cartRef.current?.close();
    };

    const onClick = (event: MouseEvent) => {
      if (event.target === cartRef.current) {
        closeCart();
      }
    };

    return (
      <dialog
        aria-labelledby="cart-heading"
        className="Cart"
        onClick={onClick}
        ref={cartRef}
      >
        <div className="no-dismiss">
          <h2 id="cart-heading">Your cart</h2>
          <button onClick={closeCart}>
            <Close />
          </button>
          <form method="dialog"></form>
          <SubmitButton
            onSubmit={() => {}}
            text="Checkout"
            variant={ButtonVariant.Primary}
          />
        </div>
      </dialog>
    );
  }
);

export default Cart;
