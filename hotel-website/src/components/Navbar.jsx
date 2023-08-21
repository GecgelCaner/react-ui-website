import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center ">
      <h1 className="text-white font-bold text-1xl z-20 cursor-pointer ">
        Experiences
      </h1>
      <HiMenuAlt3
        onClick={handleNav}
        className="z-20 text-white cursor-pointer"
        size={20}
      />
      <div
        className={
          nav
            ? " ease-in duration-300 fixed text-gray-300 w-full left-0 top-0 bg-black/90 h-screen px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10 "
        }
      >
        <ul className="flex flex-col w-full h-full items-center justify-center">
          <li className="font-bold text-1xl p-4">Home</li>
          <li className="font-bold text-1xl p-4">Destinations</li>
          <li className="font-bold text-1xl p-4">Reservations</li>
          <li className="font-bold text-1xl p-4">Amenities</li>
          <li className="font-bold text-1xl p-4">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
