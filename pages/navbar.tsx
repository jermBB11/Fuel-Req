import React from "react";

const Navbar = () => {
  return (
    <div className="p-5 bg-gray-100 drop-shadow-black">
      <div className="">
        <ul className="flex gap-4  text-xl justify-center">
        <a href="">Home</a>
        <a href="">History</a>
        <a href="">About</a>
        <div className="items-end">
        <button>Login</button>
      </div>
      </ul>
      
      </div>
      
    </div>
  );
};

export default Navbar;
