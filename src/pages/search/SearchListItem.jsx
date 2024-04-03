import "./SearchListItem.css";

function SearchListItem(props) {
  console.log(props.freeCancel);
  return (
    <div className="search-list-item">
      <div>
        <img
          src={props.image}
          alt={props.name}
          width="200px"
          height="200px"
          className="search-list-item__image"
        ></img>
      </div>
      <div className="search-flex-item__des">
        <h2 className="search-list-item__name">{props.name}</h2>
        <div className="search-list-item__distance">{`${props.distance} from center`}</div>
        <div className="search-list-item__tag">{props.tag}</div>
        <div className="search-list-item__des">{props.description}</div>
        <div className="search-list-item__type">{props.type}</div>
        <div className="search-list-item__cancel1">{`${
          props.freeCancel ? "Free cancellation" : ""
        }`}</div>
        <div className="search-list-item__cancel2">{`${
          props.freeCancel
            ? "You can cancel later, so lock in this great price today!"
            : ""
        }`}</div>
      </div>
      <div className="search-flex-item__price">
        <div className="search-flex-item__price-rate">
          <div className="search-list-item__rateText">{props.rateText}</div>
          <div className="search-list-item__rate">{props.rate}</div>
        </div>
        <div className="search-flex-item__price-price">
          <h2 className="search-list-item__price">{`$${props.price}`}</h2>
          <div className="search-list-item__priceDes">
            Includes taxes and fees
          </div>
          <button className="search-list-item__btn">See availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchListItem;
