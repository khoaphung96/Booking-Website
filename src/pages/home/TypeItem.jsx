import "./TypeItem.css";

function TypeItem(props) {
  return (
    <div className="type-item">
      <img
        src={props.image}
        alt={props.name}
        width="150px"
        height="150px"
        className="type-item__image"
      ></img>
      <h4 className="type-item__name">{props.name}</h4>
      <h5 className="type-item__count">{`${props.count} hotels`}</h5>
    </div>
  );
}

export default TypeItem;
