import {
  forwardRef,
  MouseEvent,
  Ref,
  useImperativeHandle,
  useRef,
} from "react";
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
      <dialog className="Cart" onClick={onClick} ref={cartRef}>
        <div className="no-dismiss">
          <h2>Your cart</h2>
          <button onClick={closeCart}>Close</button>
          <form>
            <button>Check out</button>
          </form>
        </div>
      </dialog>
    );
  }
);

export default Cart;
