import "./Home.css";
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";
import HomeResForm from "./HomeResForm";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader></HomeHeader>
      <HomeBody></HomeBody>
      <HomeResForm></HomeResForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
