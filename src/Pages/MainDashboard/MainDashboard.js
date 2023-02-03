import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserAlt,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaGraduationCap,
  FaTags,
  FaCertificate,
  FaUserCog,
  FaSignOutAlt
} from "react-icons/fa";
import Layout from "./Layout/Layout";
const MainDashboard = () => {
  return (
    <div className="mt-10">
      <div className="lg:flex lg:justify-between">
        <div className="  lg:flex">
          <div className="lg:w-3/12 lg:flex">
            <img
              className="w-1/4 mx-auto rounded-full"
              src="https://i.ibb.co/p4hQzDK/download.jpg"
              alt="profile"
            />
            <div className="my-auto text-center lg:text-start mt-2">
              <p className="text-xl  font-semibold">Aminul Islam Rakib</p>
              <p className="text-slate-500">Student</p>
            </div>
          </div>
        </div>
        <div className="border-2  border-green-400 p-2 rounded-lg w-2/3 mx-auto lg:w-1/6 mt-3 lg:my-auto hover:bg-green-600 text-green-500 hover:text-white">
          <Link to="/" className="flex justify-center ">
            <p className="my-auto mr-2 ">
              <FaUserAlt></FaUserAlt>
            </p>
            <p className="font-semibold ">Became an Instructor</p>
          </Link>
        </div>
      </div>

      <div className="border-t-2 mt-10 border-green-200 lg:grid grid-cols-6">
        <div className="col-span-1 border-r-2 border-green-200">
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
              <p>Dashboard</p>
              <p>Dashboard</p>
              <p>Dashboard</p>
              <p>Dashboard</p>
              <p>Dashboard</p>
              <p>Dashboard</p>
              <p>Dashboard</p>
            </ul>
          </div>

          <div className="hidden md:block">
            <Link
              to="/maindashboard/dashboard"
              className="p-2 mt-2 flex hover:bg-green-500 hover:text-white rounded-md"
            >
              <p className="my-auto text-3xl mr-4">
                <FaChalkboardTeacher></FaChalkboardTeacher>
              </p>
              <p className="text-xl my-auto font-semibold">Dashboard</p>
            </Link>

            <Link
              to="/"
              className="p-2 mt-2 flex hover:bg-green-500 hover:text-white rounded-md"
            >
              <p className="my-auto text-3xl mr-4">
                <FaUserGraduate></FaUserGraduate>
              </p>
              <p className="text-xl my-auto font-semibold">My Profile</p>
            </Link>

            <Link
              to="/"
              className="p-2 mt-2 flex hover:bg-green-500 hover:text-white rounded-md"
            >
              <p className="my-auto text-3xl mr-4">
                <FaGraduationCap></FaGraduationCap>
              </p>
              <p className="text-xl my-auto font-semibold">Enrolled Courses</p>
            </Link>

            <Link
              to="/"
              className="p-2 mt-2 flex hover:bg-green-500 hover:text-white rounded-md"
            >
              <p className="my-auto text-3xl mr-4">
                <FaTags></FaTags>
              </p>
              <p className="text-xl my-auto font-semibold">Order History</p>
            </Link>
            <Link
              to="/"
              className="p-2 mt-2 flex hover:bg-green-500 hover:text-white rounded-md"
            >
              <p className="my-auto text-3xl mr-4">
                <FaCertificate></FaCertificate>
              </p>
              <p className="text-xl my-auto font-semibold">Certificate</p>
            </Link>
          </div>

          <div className="border-t-2 border-green-200 mt-2">
            <Link
              to="/"
              className="p-2 mt-2 flex hover:bg-green-500 hover:text-white rounded-md"
            >
              <p className="my-auto text-3xl mr-4">
                <FaUserCog></FaUserCog>
              </p>
              <p className="text-xl my-auto font-semibold">Setting</p>
            </Link>
            <Link
              to="/"
              className="p-2 mt-2 flex hover:bg-green-500 hover:text-white rounded-md"
            >
              <p className="my-auto text-3xl mr-4">
                <FaSignOutAlt></FaSignOutAlt>
              </p>
              <p className="text-xl my-auto font-semibold">Sign Out</p>
            </Link>
          </div>

          
        </div>

        
        

        <div className="col-span-5">
          <Layout></Layout>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
