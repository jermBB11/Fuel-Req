import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-5 bg-gray-100 drop-shadow-black gap-2">
      <div className="">
        <ul className="flex gap-4  text-xl justify-center">
          <Link href="/">Home</Link>
          <Link href="/history">History</Link>
          <Link href="/about">About</Link>
          <Link href="/fuel_request">Request</Link>
          <Link href="/login">Login</Link>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
