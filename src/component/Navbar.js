import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="bg-indigo-600 w-full h-12 flex items-center justify-between px-20">
        <div>
          <Link to="/">
            <h1 className="text-white text-xl">Crud App</h1>
          </Link>
        </div>

        <Link to="/add">
          <i className="fa-solid fa-plus text-white cursor-pointer text-xl">
            {" "}
          </i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
