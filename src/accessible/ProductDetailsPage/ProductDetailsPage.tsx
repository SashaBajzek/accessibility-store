import { useState } from "react";
import { useParams } from "react-router-dom";
import { CartItem } from "../../App";
import { getItemById } from "../../inventory";

interface ProductDetailsPageProps {
  addToCart: (cartItem: CartItem) => void;
}

const ProductDetailsPage = ({ addToCart }: ProductDetailsPageProps) => {
  const [quantity, setQuantity] = useState(0);

  const params = useParams();
  const item = params.id && getItemById(params.id);
  if (item === undefined || item === "") return null;

  const { description, images, name, price } = item;
  const productImage = images && images[0];

  const decrement = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      {productImage ? (
        <img
          alt={productImage.description}
          className="image"
          src={`${process.env.PUBLIC_URL}/assets/${productImage.fileName}`}
        ></img>
      ) : (
        <div className="image">Product Image Loading</div>
      )}
      <h1>{name}</h1>
      <div className="price">${price}</div>
      <div>Quantity</div>
      <button onClick={decrement}>-</button>
      <div>{quantity}</div>
      <button onClick={increment}>+</button>
      <button onClick={() => addToCart({ item, quantity })}>Add to cart</button>
      <p>{description}</p>
    </>
  );
};

export default ProductDetailsPage;
