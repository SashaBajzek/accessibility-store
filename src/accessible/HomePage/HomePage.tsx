import {
  Bracelet,
  getArtItems,
  getFruitItems,
  getMiscItems,
  getNatureItems,
} from "../../inventory";
import { CartItem } from "../../App";
import { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";

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
      <ProductList items={artItems} />
      <h2>Fruit Inspired</h2>
      <ProductList items={fruitItems} />
      <h2>Nature Inspired</h2>
      <ProductList items={natureItems} />
      <h2>Miscellaneous</h2>
      <ProductList items={miscItems} />
    </>
  );
};

export default HomePage;
