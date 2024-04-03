import Header from "./Header";
import Navbar from "./Narbar";
import "./HomeHeader.css";

function HomeHeader() {
  return (
    <div className="home-header">
      <Navbar></Navbar>
      <Header></Header>
    </div>
  );
}

export default HomeHeader;
