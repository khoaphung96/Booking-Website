import "./SearchPopup.css";

function SearchPopup() {
  const date = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(date.getDate() + 1);

  return (
    <div className="search-popup">
      <h2>Search</h2>
      <form className="des-form">
        <label className="des-form__label">Destination</label>
        <input type="text" className="des-form__input"></input>
      </form>
      <form className="checkin-form">
        <label className="checkin-form__label">Check-in Date</label>
        <input
          type="text"
          className="checkin-form__input"
          placeholder={`${date.toLocaleDateString()} to ${tomorrow.toLocaleDateString()}`}
        ></input>
      </form>
      <label>Options</label>
      <form className="options">
        <div>
          <label className="options-form__label">Min price per night</label>
          <input type="number" className="options-form__input"></input>
        </div>
        <div>
          <label className="options-form__label">Max price per night</label>
          <input type="number" className="options-form__input"></input>
        </div>
        <div>
          <label className="options-form__label">Adult</label>
          <input
            type="number"
            className="options-form__input"
            placeholder="1"
          ></input>
        </div>
        <div>
          <label className="options-form__label">Children</label>
          <input
            type="number"
            className="options-form__input"
            placeholder="0"
          ></input>
        </div>
        <div>
          <label className="options-form__label">Room</label>
          <input
            type="number"
            className="options-form__input"
            placeholder="1"
          ></input>
        </div>
      </form>
      <button className="search-btn" type="submit">
        Search
      </button>
    </div>
  );
}

export default SearchPopup;
