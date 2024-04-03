import "./SearchList.css";
import SearchListItem from "./SearchListItem";

function SearchList() {
  const searchData = [
    {
      name: "Tower Street Apartments",
      distance: "500m",
      tag: "Free airport taxi",
      type: "Entire studio • 1 bathroom • 21m² 1 full bed",
      description: "Studio Apartment with Air conditioning",
      free_cancel: true,
      price: 112,
      rate: 8.9,
      rate_text: "Excellent",
      image: "./images/hotel_search_1.jpg",
    },
    {
      name: "Comfort Suites Airport",
      distance: "200m",
      tag: "Free Breakfast",
      type: "Entire studio • 2 bathroom • 100m² 2 full bed",
      description: "Studio Apartment",
      free_cancel: true,
      price: 140,
      rate: 9.3,
      rate_text: "Exceptional",
      image: "./images/hotel_search_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      distance: "100m",
      tag: "Free Parking",
      type: "1 bathroom • 51m² 2 full bed",
      description: "Hotel in Lisbon",
      free_cancel: false,
      price: 99,
      rate: 8.8,
      rate_text: "Excellent",
      image: "./images/hotel_search_3.jpg",
    },
  ];

  return (
    <div className="search-list">
      {searchData.map((searchItem) => (
        <SearchListItem
          key={searchItem.image}
          name={searchItem.name}
          distance={searchItem.distance}
          tag={searchItem.tag}
          type={searchItem.type}
          description={searchItem.description}
          freeCancel={searchItem.free_cancel}
          price={searchItem.price}
          rate={searchItem.rate}
          rateText={searchItem.rate_text}
          image={searchItem.image}
        ></SearchListItem>
      ))}
    </div>
  );
}

export default SearchList;
