import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 rounded-lg">
      <div className="navbar-start">
        <div className="dropdown font-semibold">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="hover:bg-green-300 rounded-md">Home</a>
            </li>

            
            <li tabIndex={1}>
              <a className="justify-between hover:bg-green-300 rounded-md">
                Courses
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a className="hover:bg-green-300 rounded-md">Submenu 1</a>
                </li>
                <li>
                  <a className="hover:bg-green-300 rounded-md">Submenu 2</a>
                </li>
              </ul>
            </li>


            <li tabIndex={0}>
              <a className="justify-between hover:bg-green-300 rounded-md">
                Blogs
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a className="hover:bg-green-300 rounded-md">Submenu 1</a>
                </li>
                <li>
                  <a className="hover:bg-green-300 rounded-md">Submenu 2</a>
                </li>
              </ul>
            </li>


            <li>
              <a className="hover:bg-green-300 rounded-md">Contact Us</a>
            </li>
          </ul>
        </div>

        <Link to="/" className="font-bold flex ">
          <p className="text-green-700 text-4xl animate-bounce ">E  
          </p>
          <span className="text-2xl text-green-600 my-auto">DU</span>
          <span className="text-green-600 font-extrabold text-2xl animate-pulse my-auto">-</span>
          <span className="text-green-600  text-2xl my-auto">SKILL</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>

        <ul className="menu menu-horizontal px-1 text-xl font-semibold ">
          <li className="hover:bg-green-300 rounded-md">
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <a className="hover:bg-green-300 rounded-md">
              Courses
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a className="hover:bg-green-300 rounded-md">Submenu 1</a>
              </li>
              <li>
                <a className="hover:bg-green-300 rounded-md">Submenu 2</a>
              </li>
            </ul>
          </li>
          <li tabIndex={1}>
            <a className="hover:bg-green-300 rounded-md">
              Blogs
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a className="hover:bg-green-300 rounded-md">Submenu 1</a>
              </li>
              <li>
                <a className="hover:bg-green-300 rounded-md">Submenu 2</a>
              </li>
            </ul>
            
          </li>
          
          <li>
            <a className="hover:bg-green-300 rounded-md">Contact Us</a>
          </li>
          
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/"
          className="p-2 lg:px-5 lg:py-3 rounded font-semibold text-green-600 text-2xl mx-2 hover:bg-green-600 hover:text-white "
        >
          Login
        </Link>
        <Link
          to="/"
          className="p-2 lg:px-7 lg:py-3 rounded font-semibold text-white text-xl bg-gradient-to-r from-green-400 to-green-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-green-400"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
