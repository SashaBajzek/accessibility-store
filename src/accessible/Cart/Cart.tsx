import { useRef } from "react";
import "./Cart.css";

const Cart = () => {
  const cartRef = useRef(null);
  return (
    <dialog className="Cart" ref={cartRef}>
      <h2>Your cart</h2>
      <button>Close</button>
      <form>
        <button>Check out</button>
      </form>
    </dialog>
  );
};

export default Cart;
