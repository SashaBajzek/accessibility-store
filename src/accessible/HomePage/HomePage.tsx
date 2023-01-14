import { Category, products } from "../../sampleProducts";
import ProductTile from "../ProductTile/ProductTile";
import { CartItem } from "../../App";

interface HomePageProps {
  addToCart: (product: CartItem) => void;
}

const HomePage = ({ addToCart }: HomePageProps) => {
  return (
    <>
      <h1>All Bracelets</h1>
      <h2>Art Inspired</h2>
      {products.map(
        (product) =>
          product.category === Category.Art && (
            <ProductTile
              addToCart={addToCart}
              key={product.id}
              product={product}
            />
          )
      )}
      <h2>Fruit Inspired</h2>
      <ul>
        {products.map(
          (product) =>
            product.category === Category.Fruit && (
              <li>
                <ProductTile
                  addToCart={addToCart}
                  key={product.id}
                  product={product}
                />
              </li>
            )
        )}
      </ul>
      <h2>Nature Inspired</h2>
      {products.map(
        (product) =>
          product.category === Category.Nature && (
            <ProductTile
              addToCart={addToCart}
              key={product.id}
              product={product}
            />
          )
      )}
      <h2>Miscellaneous</h2>
      {products.map(
        (product) =>
          product.category === Category.Miscellaneous && (
            <ProductTile
              addToCart={addToCart}
              key={product.id}
              product={product}
            />
          )
      )}
    </>
  );
};

export default HomePage;
