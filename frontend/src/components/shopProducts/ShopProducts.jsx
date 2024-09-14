import "./ShopProducts.scss";
import Card from "../../components/card/Card";
import useFetch from "../../hooks/useFetch";

const ShopProducts = () => {
  const {
    data: products,
    error,
    isPending,
  } = useFetch("http://localhost:8000/products");

  return (
    <div className="shopProducts">
      <div className="container">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        <div className="grid-list">
          {products && <Card products={products} />}
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
