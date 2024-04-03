import "./CityItem.css";

function CityItem(props) {
  return (
    <div className="city-item">
      <img
        src={props.image}
        alt={props.name}
        width="280px"
        height="230px"
        className="city-item__image"
      ></img>
      <h2 className="city-item__name">{props.name}</h2>
      <h2 className="city-item__subText">{props.subText}</h2>
    </div>
  );
}

export default CityItem;
