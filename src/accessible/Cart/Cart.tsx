import {
  forwardRef,
  MouseEvent,
  Ref,
  useImperativeHandle,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import CartContent from "../CartContent/CartContent";
import "./Cart.css";

const Cart = forwardRef<HTMLDialogElement>(
  (props, ref: Ref<{ showModal: () => void }>) => {
    const cartRef = useRef<HTMLDialogElement>(null);
    const navigate = useNavigate();

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

    const checkout = () => {
      cartRef.current?.close();
      navigate("/checkout");
    };

    return (
      <dialog
        aria-labelledby="cart-heading"
        className="Cart"
        onClick={onClick}
        ref={cartRef}
      >
        <div className="no-dismiss">
          <CartContent checkout={checkout} closeCart={closeCart} />
        </div>
      </dialog>
    );
  }
);

export default Cart;
