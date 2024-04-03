import "./City.css";
import CityItem from "./CityItem";

function City() {
  const cityData = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.jpg",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.jpg",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.jpg",
    },
  ];

  return (
    <div className="city">
      {cityData.map((cityItem) => (
        <CityItem
          key={cityItem.image}
          name={cityItem.name}
          subText={cityItem.subText}
          image={cityItem.image}
        ></CityItem>
      ))}
    </div>
  );
}

export default City;
