import {
  Bracelet,
  getArtItems,
  getFruitItems,
  getMiscItems,
  getNatureItems,
} from "../../inventory";
import { useContext, useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import { SetTitleContext } from "../../context/SetTitleContext";

const HomePage = () => {
  const { setTitle } = useContext(SetTitleContext);
  useEffect(() => {
    setTitle("Shop All Bracelets");
  }, [setTitle]);

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
