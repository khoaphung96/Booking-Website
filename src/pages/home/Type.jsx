import "./Type.css";
import TypeItem from "./TypeItem";

function Type() {
  const typeData = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.jpg",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];

  return (
    <div className="type">
      <h3 className="type-title">Browse by property type</h3>
      <div className="type-group">
        {typeData.map((typeItem) => (
          <TypeItem
            key={typeItem.image}
            name={typeItem.name}
            count={typeItem.count}
            image={typeItem.image}
          ></TypeItem>
        ))}
      </div>
    </div>
  );
}
export default Type;
