import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 w-[80%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu text-xl menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/coffees">Coffees</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="text-2xl font-bold">
          CoffeeHouse
        </NavLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-400 text-white px-3 py-1 rounded"
                  : "text-black px-3 py-1"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/coffees"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-400 text-white px-3 py-1 rounded"
                  : "text-black px-3 py-1"
              }
            >
              Coffees
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-400 text-white px-3 py-1 rounded"
                  : "text-black px-3 py-1"
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
