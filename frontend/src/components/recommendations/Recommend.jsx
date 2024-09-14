import "./Recommend.scss";
import Card from "../card/Card";
import useFetch from "../../hooks/useFetch";

const Recommend = () => {
  const {
    data: products,
    error,
    isPending,
  } = useFetch("http://localhost:8000/products");

  return (
    <div className="recommended">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <div className="container">
        <div className="title">
          <h1 className="h1">You might also like</h1>
        </div>
        <div className="products-recommended">
          {products && <Card products={products.slice(0, 5)} />}
        </div>
      </div>
    </div>
  );
};

export default Recommend;
