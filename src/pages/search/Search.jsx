import SearchPopup from "./SearchPopup";
import SearchList from "./SearchList";
import Navbar from "../home/Narbar";
import HomeResForm from "../home/HomeResForm";
import Footer from "../home/Footer";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="search">
        <SearchPopup></SearchPopup>
        <SearchList></SearchList>
      </div>
      <HomeResForm></HomeResForm>
      <Footer></Footer>
    </div>
  );
};

export default Search;
