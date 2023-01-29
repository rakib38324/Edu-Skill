import React from "react";
import { FaRaspberryPi,FaLaptopCode,FaBusinessTime,FaHospitalUser,FaUsersCog,FaRegMap,FaChartLine,FaPenSquare } from "react-icons/fa";

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
          <div className="flex justify-around py-4">
            <p className="text-2xl font-semibold">Art & Design</p>
            <p className="text-4xl ">
              <FaRaspberryPi></FaRaspberryPi>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-around py-4">
            <p className="text-2xl font-semibold">Web Development</p>
            <p className="text-4xl">
              <FaLaptopCode></FaLaptopCode>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-around py-4">
            <p className="text-2xl font-semibold">Business</p>
            <p className="text-4xl">
              <FaBusinessTime></FaBusinessTime>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-around py-4">
            <p className="text-2xl font-semibold">Finance</p>
            <p className="text-4xl">
              <FaHospitalUser></FaHospitalUser>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-around py-4">
            <p className="text-2xl font-semibold">Job Expert</p>
            <p className="text-4xl">
              <FaUsersCog></FaUsersCog>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-around py-4">
            <p className="text-2xl font-semibold">Marketing</p>
            <p className="text-4xl">
              <FaRegMap></FaRegMap>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-around py-4">
            <p className="text-2xl font-semibold">Strategy</p>
            <p className="text-4xl">
              <FaChartLine></FaChartLine>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-around py-4">
            <p className="text-2xl font-semibold">Writing</p>
            <p className="text-4xl">
              <FaPenSquare></FaPenSquare>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-around py-4">
            <p className="text-2xl font-semibold">Art & Design</p>
            <p className="text-4xl">
              <FaRaspberryPi></FaRaspberryPi>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-around py-4">
            <p className="text-2xl font-semibold">Art & Design</p>
            <p className="text-4xl">
              <FaRaspberryPi></FaRaspberryPi>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-around py-4">
            <p className="text-2xl font-semibold">Art & Design</p>
            <p className="text-4xl">
              <FaRaspberryPi></FaRaspberryPi>
            </p>
          </div>
        </div>

        <div className="border-2 hover:bg-green-300 rounded-md hover:animate-pulse">
          <div className="flex justify-around py-4">
            <p className="text-2xl font-semibold">Art & Design</p>
            <p className="text-4xl">
              <FaRaspberryPi></FaRaspberryPi>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Categories;
