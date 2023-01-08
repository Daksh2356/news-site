import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-blue-200 border-black border-b-2">
      <Link
        to={"/"}
        className="items-center p-6 flex text-center text-white bg-black"
      >
        NEWS SITE
      </Link>
      <div className="flex p-6 gap-11">
        <div className="flex items-center cursor-pointer"> HOME </div>
        <div className="flex items-center cursor-pointer"> SPORTS </div>
        <div className="flex items-center cursor-pointer"> ENTERTAINMENT </div>
        <div className="flex items-center cursor-pointer"> NATIONAL </div>
        <div className="flex items-center cursor-pointer"> INTERNATIONAL </div>
      </div>
    </div>
  );
};

export default Navbar;
