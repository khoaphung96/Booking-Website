import HeaderForm from "./HearderForm";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">A lifetime of discounts? It's Genius.</h1>
      <p className="header-content">
        Get rewarded for your travels - unlock instant saving of 10% or more
        with a free acount
      </p>
      <button type="submit" className="btn-submit">
        Sign in / Register
      </button>
      <HeaderForm></HeaderForm>
    </div>
  );
}

export default Header;
