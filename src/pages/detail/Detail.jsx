import ImageItem from "./ImageItem";
import Navbar from "../home/Narbar";
import HomeResForm from "../home/HomeResForm";
import Footer from "../home/Footer";
import "./Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faLocationDot);

const Detail = () => {
  const detailData = {
    name: "Tower Street Apartments",
    address: "Elton St 125 New york",
    distance: "Excellent location - 500m from center",
    price: "Book a stay over $114 at this property and get a free airport taxi",
    photos: [
      "./images/hotel_detail_1.jpg",
      "./images/hotel_detail_2.jpg",
      "./images/hotel_detail_3.jpg",
      "./images/hotel_detail_4.jpg",
      "./images/hotel_detail_5.jpg",
      "./images/hotel_detail_6.jpg",
    ],
    title: "Stay in the heart of City",
    description:
      "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    nine_night_price: 945,
  };
  return (
    <div>
      <Navbar style={{ color: "blue" }}></Navbar>
      <div className="detail">
        <h2 className="detail__name">{detailData.name}</h2>
        <div className="detail-address">
          <FontAwesomeIcon
            icon="location-dot"
            className="detail-address__icon"
          />
          <div className="detail-address__address">{detailData.address}</div>
        </div>
        <div className="detail__distance">{detailData.distance}</div>
        <div className="detail__price">{detailData.price}</div>
        <div className="image-group">
          {detailData.photos.map((imageItem) => (
            <ImageItem key={imageItem} img={imageItem}></ImageItem>
          ))}
        </div>
        <div className="flex-group">
          <div className="flex-item__des">
            <h2 className="detail__title">{detailData.title}</h2>
            <div className="detail__des">{detailData.description}</div>
          </div>
          <div className="flex-item__price">
            <h4>Perfect for a 9-night stay!</h4>
            <div className="detail__price-des">
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </div>
            <div className="detail__nine-night-price">
              <p>
                <b>${detailData.nine_night_price}</b> (9 nights)
              </p>
            </div>
            <button type="submit" className="detail-btn">
              Reserve or Book now!
            </button>
          </div>
        </div>
      </div>
      <HomeResForm></HomeResForm>
      <Footer></Footer>
    </div>
  );
};

export default Detail;
