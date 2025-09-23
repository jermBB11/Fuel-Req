import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
   
    <div className="navbar bg-base-100 shadow-sm flex justify-center-safe items-center">

  <div className=" flex items-center gap-3">
    <div className="gap-2 flex items-center">
      <div className="">
        <ul className="flex gap-10 font-bold text-md items-center">
          <Link 
          className="hover:underline hover:text-blue-600"
          href="/">Home</Link>
          <Link 
          className="hover:underline  hover:text-blue-600" 
          href="/history">History</Link>
          <Link 
          className="hover:underline  hover:text-blue-600" 
          href="/about">About</Link>
          <Link 
          className="hover:underline  hover:text-blue-600" 
          href="/fuel_request">Request</Link>
          <Link 
          className="hover:underline  hover:text-blue-600" 
          href="/login">Login</Link>
          
        </ul>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default Navbar;
