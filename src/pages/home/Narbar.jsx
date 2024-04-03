import NavbarItem from "./NavbarItem";
import "./Navbar.css";

function Navbar() {
  const navbarData = [
    // {
    //   type: "Stays",
    //   icon: "fa-bed",
    //   active: true,
    // },
    // {
    //   type: "Flights",
    //   icon: "fa-plane",
    //   active: false,
    // },
    // {
    //   type: "Car rentals",
    //   icon: "fa-car",
    //   active: false,
    // },
    // {
    //   type: "Attractions",
    //   icon: "fa-bed",
    //   active: false,
    // },
    // {
    //   type: "Airport taxis",
    //   icon: "fa-taxi",
    //   active: false,
    // },
    {
      type: "Stays",
      icon: "bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "taxi",
      active: false,
    },
  ];

  return (
    <div className="navbar">
      <h1>Booking Website</h1>
      <div className="navbar-group">
        {navbarData.map((navbarItem) => (
          <NavbarItem
            key={navbarItem.type}
            type={navbarItem.type}
            icon={navbarItem.icon}
            active={navbarItem.active}
          />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
