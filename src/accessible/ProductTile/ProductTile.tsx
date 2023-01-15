import { Link } from "react-router-dom";
import { Bracelet } from "../../inventory";
import "./ProductTile.css";

interface ProductTileProps {
  product: Bracelet;
}

const ProductTile = ({ product }: ProductTileProps) => {
  const { name, id, images, price } = product;
  const productImage = images && images[0];
  return (
    <article className="productTile">
      {productImage ? (
        <img
          alt={productImage.description}
          className="image"
          src={`${process.env.PUBLIC_URL}/assets/${productImage.fileName}`}
        ></img>
      ) : (
        <div className="image">Product Image Loading</div>
      )}
      <h3 className="name">{name}</h3>
      <div className="price">${price}</div>
      <Link to={"items/" + id}>To Product Page</Link>
    </article>
  );
};

export default ProductTile;
