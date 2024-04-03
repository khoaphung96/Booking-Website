import "./HomeBody.css";
import City from "./City";
import Type from "./Type";
import Hotel from "./Hotel";

function HomeBody() {
  return (
    <div className="home-body">
      <City></City>
      <Type></Type>
      <Hotel></Hotel>
    </div>
  );
}

export default HomeBody;
