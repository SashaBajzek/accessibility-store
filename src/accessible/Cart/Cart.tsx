import {
  forwardRef,
  MouseEvent,
  Ref,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../App";
import CartContent from "../CartContent/CartContent";
import EmptyCartContent from "../EmptyCartContent/EmptyCartContent";
import "./Cart.css";

const Cart = forwardRef<HTMLDialogElement>(
  (props, ref: Ref<{ showModal: () => void }>) => {
    const cartRef = useRef<HTMLDialogElement>(null);
    const navigate = useNavigate();

    const { cart } = useContext(CartContext);

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
          {cart.length > 0 ? (
            <CartContent checkout={checkout} closeCart={closeCart} />
          ) : (
            <EmptyCartContent closeCart={closeCart} />
          )}
        </div>
      </dialog>
    );
  }
);

export default Cart;
