import {
  Bracelet,
  Category,
  getArtItems,
  getFruitItems,
  getMiscItems,
} from "../../inventory";
import ProductTile from "../ProductTile/ProductTile";
import { CartItem } from "../../App";
import { useEffect, useState } from "react";
import { getNatureItems } from "../../inventory";

interface HomePageProps {
  addToCart: (product: CartItem) => void;
}

const HomePage = ({ addToCart }: HomePageProps) => {
  const [artItems, setArtItems] = useState<Bracelet[]>([]);
  const [fruitItems, setFruitItems] = useState<Bracelet[]>([]);
  const [natureItems, setNatureItems] = useState<Bracelet[]>([]);
  const [miscItems, setMiscItems] = useState<Bracelet[]>([]);
  useEffect(() => {
    setArtItems(getArtItems());
    setFruitItems(getFruitItems());
    setNatureItems(getNatureItems());
    setMiscItems(getMiscItems());
  }, []);
  return (
    <>
      <h1>All Bracelets</h1>
      <h2>Art Inspired</h2>
      {artItems &&
        artItems.map((product: Bracelet) => (
          <ProductTile
            addToCart={addToCart}
            key={product.id}
            product={product}
          />
        ))}
      <h2>Fruit Inspired</h2>
      <ul>
        {fruitItems &&
          fruitItems.map((product: Bracelet) => (
            <li>
              <ProductTile
                addToCart={addToCart}
                key={product.id}
                product={product}
              />
            </li>
          ))}
      </ul>
      <h2>Nature Inspired</h2>
      {natureItems &&
        natureItems.map((product: Bracelet) => (
          <ProductTile
            addToCart={addToCart}
            key={product.id}
            product={product}
          />
        ))}
      <h2>Miscellaneous</h2>
      {miscItems &&
        miscItems.map((product: Bracelet) => (
          <ProductTile
            addToCart={addToCart}
            key={product.id}
            product={product}
          />
        ))}
    </>
  );
};

export default HomePage;
