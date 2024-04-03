import "./ImageItem.css";

function ImageItem(props) {
  return <img src={props.img} width="350px" className="image-item"></img>;
}

export default ImageItem;
