import {
  forwardRef,
  MouseEvent,
  Ref,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import CartContent from "../CartContent/CartContent";
import { CartContext } from "../../context/CartContext";
import { HideOverflowContext } from "../../context/HideOverflowContext";
import EmptyCartContent from "../EmptyCartContent/EmptyCartContent";
import "./Cart.css";
import { AriaLiveAnnouncerProvider } from "../../hooks/AriaLiveAnnouncer";

const Cart = forwardRef<HTMLDialogElement>(
  (props, ref: Ref<{ showModal: () => void }>) => {
    const cartRef = useRef<HTMLDialogElement>(null);
    const navigate = useNavigate();

    const { cart } = useContext(CartContext);
    const { setHideOverflow } = useContext(HideOverflowContext);

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
      setHideOverflow(false);
    };

    const onClick = (event: MouseEvent) => {
      if (event.target === cartRef.current) {
        closeCart();
      }
    };

    const checkout = () => {
      cartRef.current?.close();
      setHideOverflow(false);
      navigate("/checkout");
    };

    return (
      <dialog
        aria-labelledby="cart-heading"
        className="Cart"
        onClick={onClick}
        ref={cartRef}
      >
        <AriaLiveAnnouncerProvider>
          <div className="no-dismiss">
            {cart.length > 0 ? (
              <CartContent checkout={checkout} closeCart={closeCart} />
            ) : (
              <EmptyCartContent closeCart={closeCart} />
            )}
          </div>
        </AriaLiveAnnouncerProvider>
      </dialog>
    );
  }
);

export default Cart;
