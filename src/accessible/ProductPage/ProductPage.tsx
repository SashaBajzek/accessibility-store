export interface ProductPageProps {
  name: string;
}

const ProductPage = ({ name }: ProductPageProps) => {
  return <h1>{name} Product Page</h1>;
};

export default ProductPage;
