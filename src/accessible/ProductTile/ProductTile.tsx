import { CartItem } from "../../App";
import { Bracelet } from "../../sampleProducts";
import "./ProductTile.css";

interface ProductTileProps {
  addToCart: (product: CartItem) => void;
  product: Bracelet;
}

const ProductTile = ({ addToCart, product }: ProductTileProps) => {
  const { name, images, price } = product;
  const productImage = images && images[0];
  return (
    <article className="product-tile">
      <h3 className="name">{name}</h3>
      {productImage && (
        <img
          alt={productImage.description}
          className="image"
          src={`${process.env.PUBLIC_URL}/assets/${productImage.fileName}`}
        ></img>
      )}
      <div className="price">${price}</div>
      <button
        aria-label={`Add ${name} bracelet to cart`}
        className="add-button"
        onClick={() => addToCart({ product, quantity: 1 })}
      >
        Add to cart
      </button>
    </article>
  );
};

export default ProductTile;
