import "./HotelItem.css";

function HotelItem(props) {
  function replaceHandler(e) {
    e.preventDefault();
    window.location.replace("./detail");
  }

  return (
    <div className="hotel-item">
      <img
        src={props.image}
        alt={props.name}
        width="200px"
        height="200px"
        className="hotel-item__image"
      ></img>
      <a className="hotel-item__name" href="#" onClick={replaceHandler}>
        {props.name}
      </a>
      <h4 className="hotel-item__city">{props.city}</h4>
      <h4 className="hotel-item__price">{`Starting from $${props.price}`}</h4>
      <h4 className="hotel-item__rate">{props.rate}</h4>
      <h4 className="hotel-item__type">{props.type}</h4>
    </div>
  );
}

export default HotelItem;
