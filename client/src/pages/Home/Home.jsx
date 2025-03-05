import HomeBanner from "../../components/Home/HomeBanner/index"
import HomeCat from "../../components/Home/HomeCat/index"
import HomeProduct from "../../components/Home/HomeProduct/index"
import NewLetter from "../../components/Home/NewLetter/index"
import Footer from "../../components/Footer/index"

const Home = () => {

  return (
    <>
      <HomeBanner />
      <HomeCat />
      <HomeProduct />
      <NewLetter />
      <Footer />
    </>
  );
};

export default Home;
