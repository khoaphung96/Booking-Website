import "./HeaderForm.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendar, faFemale } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
library.add(faBed, faCalendar, faFemale);

function HeaderForm() {
  const date = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(date.getDate() + 1);

  const [state, setState] = useState([
    {
      startDate: date,
      endDate: tomorrow,
      key: "selection",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  function replaceHandler(e) {
    e.preventDefault();
    window.location.replace("./search");
  }

  function openAndCloseDateRange() {
    if (isOpen === false) {
      setIsOpen(true);
    } else setIsOpen(false);
  }

  return (
    <form className="header-form">
      <div className="header-form-item">
        <FontAwesomeIcon icon={faBed} className="header-form-item__icon" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="header-form-item__input"
          style={{ width: "200px" }}
        ></input>
      </div>
      <div className="header-form-item date-range">
        <FontAwesomeIcon icon={faCalendar} className="header-form-item__icon" />
        <input
          type="text"
          placeholder={`${state[0].startDate.toLocaleDateString()} to ${state[0].endDate.toLocaleDateString()}`}
          onClick={openAndCloseDateRange}
          className="header-form-item__input"
          style={{ width: "200px" }}
        ></input>
        <div style={isOpen ? { display: "block" } : { display: "none" }}>
          <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            // className={`date ${isOpen ? "isOpen" : "isClose"}`}
            className="date"
            minDate={new Date()}
            onChange={(item) => setState([item.selection])}
            ranges={state}
          />
        </div>
      </div>
      <div className="header-form-item">
        <FontAwesomeIcon icon={faFemale} className="header-form-item__icon" />
        <input
          type="text"
          placeholder="2 adult - 0 children - 1 room"
          className="header-form-item__input"
          style={{ width: "200px" }}
        ></input>
      </div>
      <button
        type="submit"
        className="header-form-item__btn"
        onClick={replaceHandler}
      >
        Search
      </button>
    </form>
  );
}

export default HeaderForm;
