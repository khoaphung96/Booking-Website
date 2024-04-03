import "./NavbarItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faBed, faCar, faPlane, faTaxi);

function NavbarItem(props) {
  return (
    <div className={`navbar-item ${props.active && "borderActive"}`}>
      <div>
        <FontAwesomeIcon icon={props.icon} className="navbar-item__icon" />
      </div>
      <p className="navbar-item__title">{props.type}</p>
    </div>
  );
}
export default NavbarItem;
