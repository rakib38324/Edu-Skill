import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const { user, logOut, } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Logout Successfully")
      })
      .catch(() => {});
    console.log("yes");
  };

  // console.log(user);


 
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
              <Link to="/" className="hover:bg-green-300 rounded-md">
                Home
              </Link>
            </li>

            <li tabIndex={1}>
              <Link
                to="/"
                className="justify-between hover:bg-green-300 rounded-md"
              >
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
              </Link>
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
          <p className="text-green-700 text-4xl animate-bounce ">E</p>
          <span className="text-2xl text-green-600 my-auto">DU</span>
          <span className="text-green-600 font-extrabold text-2xl animate-pulse my-auto">
            -
          </span>
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

        <ul className="menu menu-horizontal px-1 text-lg font-semibold ">
          <li className="hover:bg-green-300 rounded-md ">
            <Link to='/' >Home</Link>
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
            <Link
              to="/maindashboard/dashboard"
              className="hover:bg-green-300 rounded-md"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <div className="flex justify-end">
            <button
            onClick={handleLogOut}
            className="p-2 lg:px-5 lg:py-3 rounded font-semibold text-green-600 text-xl mx-2 hover:bg-green-600 hover:text-white "
          >
            Sign Out
          </button>
          {
            user.photoURL ? 
            <Link to='/maindashboard/dashboard' className="w-2/12 my-auto rounded-full border-4 border-green-600"><img className="rounded-full" src={user.photoURL} alt="profile" /></Link>
            :
            <Link to='/maindashboard/dashboard' className="w-1/12 my-auto rounded-full border-4 border-green-600"><img className="rounded-full" src="https://i.ibb.co/47NjXRW/img-avatar3.png" alt="profile" /></Link>
          }
          </div>
        ) : (
          
          <div className="flex justify-end">
            <Link
            to="/login"
            className="p-2 lg:px-5 lg:py-3 rounded font-semibold text-green-600 text-xl mx-2 hover:bg-green-600 hover:text-white "
          >
            Login
          </Link >
          <Link className="my-auto text-3xl text-green-900" to='/login'><FaUserCircle ></FaUserCircle></Link>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Navbar;
