import FunThings from "../../components/funThings/FunThings";
import ExploreBlogs from "../../components/exploreBlogs/ExploreBlogs";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import PaymentInfo from "../../components/paymentInfo/PaymentInfo";
import ShopByCategory from "../../components/shopCategory/ShopByCategory";
import ShopInStyle from "../../components/shopInStyle/ShopInStyle";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <NewArrivals />
      <ShopByCategory />
      <PaymentInfo />
      <ShopInStyle />
      <FunThings />
      <ExploreBlogs />
    </>
  );
};

export default Home;
