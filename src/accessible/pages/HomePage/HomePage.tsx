import {
  Bracelet,
  getArtItems,
  getFruitItems,
  getMiscItems,
  getNatureItems,
} from "../../../inventory";
import { useEffect, useState } from "react";
import ProductList from "../../ProductList/ProductList";
import Page from "../Page/Page";

const HomePage = () => {
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
    <Page heading="All Bracelets" title="Shop All Bracelets">
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
    </Page>
  );
};

export default HomePage;
