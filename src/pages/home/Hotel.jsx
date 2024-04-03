import "./Hotel.css";
import HotelItem from "./HotelItem";

function Hotel() {
  const hotelData = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image: "./images/hotel_1.jpg",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image: "./images/hotel_4.jpg",
    },
  ];

  return (
    <div className="hotel">
      <h3 className="hotel-title">Homes guests love</h3>
      <div className="hotel-group">
        {hotelData.map((hotelItem) => (
          <HotelItem
            key={hotelItem.image}
            name={hotelItem.name}
            city={hotelItem.city}
            price={hotelItem.price}
            rate={hotelItem.rate}
            type={hotelItem.type}
            image={hotelItem.image}
          ></HotelItem>
        ))}
      </div>
    </div>
  );
}

export default Hotel;
