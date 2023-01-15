import { Bracelet } from "../../inventory";
import ProductTile from "../ProductTile/ProductTile";
import "./ProductList.css";

interface ProductListProps {
  items: Bracelet[];
}

const ProductList = ({ items }: ProductListProps) => {
  return (
    <ul className="productList">
      {items.map((item: Bracelet) => (
        <li className="productList-item">
          <ProductTile key={item.id} product={item} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
