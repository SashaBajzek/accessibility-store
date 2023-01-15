import { useState } from "react";
import { useParams } from "react-router-dom";
import { CartItem } from "../../App";
import { getItemById } from "../../inventory";
import "./ProductDetailsPage.css";
interface ProductDetailsPageProps {
  addToCart: (cartItem: CartItem) => void;
}

const ProductDetailsPage = ({ addToCart }: ProductDetailsPageProps) => {
  const [quantity, setQuantity] = useState(1);

  const params = useParams();
  const item = params.id && getItemById(params.id);
  if (item === undefined || item === "") return null;

  const { description, images, name, price } = item;
  const productImage = images && images[0];

  const decrement = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);

    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  return (
    <div className="productDetailsPage">
      {productImage ? (
        <img
          alt={productImage.description}
          className="image"
          src={`${process.env.PUBLIC_URL}/assets/${productImage.fileName}`}
        ></img>
      ) : (
        <div className="image">Product Image Loading</div>
      )}
      <div className="info">
        <h1>{name}</h1>
        <div className="price">${price}</div>
        <label className="quantity-label" htmlFor="quantity">
          Quantity
        </label>
        <div className="quantity-picker">
          <button onClick={decrement}>-</button>
          <input
            id="quantity"
            min="1"
            name="quantity"
            onChange={handleChange}
            type="number"
            value={quantity}
          />
          <button onClick={increment}>+</button>
        </div>
        <button
          className="submit"
          onClick={() => addToCart({ item, quantity })}
        >
          Add to cart
        </button>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
