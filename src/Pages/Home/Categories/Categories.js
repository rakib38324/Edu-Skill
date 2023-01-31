import React from "react";
import { FaBrain,FaChalkboard,FaUserGraduate,FaDatabase,FaRaspberryPi,FaLaptopCode,FaBusinessTime,FaHospitalUser,FaUsersCog,FaRegMap,FaChartLine,FaPenSquare } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="text-center mt-16 ">
      <div className="text-center">
        <p className="text-green-600 text-center font-bold text-3xl">
          Top Categories
        </p>
        <p className="text-4xl font-bold text-cyan-800 text-center">
          Browse Top Categories
        </p>
      </div>

      <div className="lg:grid grid-cols-4 gap-5 mt-8">

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-between p-4">
            <p className="text-xl font-semibold">Art & Design</p>
            <p className="text-4xl ">
              <FaRaspberryPi></FaRaspberryPi>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-between p-4">
            <p className="text-xl font-semibold">Web Development</p>
            <p className="text-4xl">
              <FaLaptopCode></FaLaptopCode>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-between p-4">
            <p className="text-xl font-semibold">Business</p>
            <p className="text-4xl">
              <FaBusinessTime></FaBusinessTime>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-between p-4">
            <p className="text-xl font-semibold">Finance</p>
            <p className="text-4xl">
              <FaHospitalUser></FaHospitalUser>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-between p-4">
            <p className="text-xl font-semibold">Job Expert</p>
            <p className="text-4xl">
              <FaUsersCog></FaUsersCog>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-between p-4">
            <p className="text-xl font-semibold">Marketing</p>
            <p className="text-4xl">
              <FaRegMap></FaRegMap>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-between p-4">
            <p className="text-xl font-semibold">Strategy</p>
            <p className="text-4xl">
              <FaChartLine></FaChartLine>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-between p-4">
            <p className="text-xl font-semibold">Writing</p>
            <p className="text-4xl">
              <FaPenSquare></FaPenSquare>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-between p-4">
            <p className="text-xl font-semibold">Data Science</p>
            <p className="text-4xl">
              <FaDatabase></FaDatabase>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-between p-4">
            <p className="text-xl font-semibold">University Courses</p>
            <p className="text-4xl">
              <FaUserGraduate></FaUserGraduate>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-between p-4">
            <p className="text-xl font-semibold">Presentation</p>
            <p className="text-4xl">
              <FaChalkboard></FaChalkboard>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-between p-4">
            <p className="text-xl font-semibold">Personal Development</p>
            <p className="text-4xl">
              <FaBrain></FaBrain>
            </p>
          </div>
        </div>

      </div>

      <p className="text-2xl my-2 p-3 text-green-600 font-bold cursor-pointer">See More</p>
    </div>
  );
};

export default Categories;
