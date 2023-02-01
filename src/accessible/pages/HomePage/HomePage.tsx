import {
  Bracelet,
  getArtItems,
  getFruitItems,
  getMiscItems,
  getNatureItems,
} from "../../../inventory";
import { useContext, useEffect, useState } from "react";
import ProductList from "../../ProductList/ProductList";
import { SetTitleContext } from "../../../context/SetTitleContext";

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
      <article aria-labelledby="art">
        <h2 id="art">Art Inspired</h2>
        <ProductList items={artItems} />
      </article>
      <article aria-labelledby="fruit">
        <h2 id="fruit">Fruit Inspired</h2>
        <ProductList items={fruitItems} />
      </article>
      <article aria-labelledby="nature">
        <h2 id="nature">Nature Inspired</h2>
        <ProductList items={natureItems} />
      </article>
      <article aria-labelledby="misc">
        <h2 id="misc">Miscellaneous</h2>
        <ProductList items={miscItems} />{" "}
      </article>
    </>
  );
};

export default HomePage;
