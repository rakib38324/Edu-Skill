import { FaUserCheck } from "react-icons/fa";
import React from "react";
import minidash from "../../../Images/minidash.jpg";

const MiniDashboard = () => {
  return (
    <div className="mt-10 ">
      <p className="text-cyan-600 text-center font-bold text-2xl">
        Start to Success
      </p>
      <p className="text-4xl font-bold text-cyan-800 text-center">
        Start your journey & Achieve your goal
      </p>

      <div className=" lg:grid lg:grid-cols-2 mt-10 m-2">
        
      <div className="md:grid md:grid-cols-2 gap-2 my-auto  ">
          <div className="flex justify-center bg-gradient-to-r from-green-300 via-green-300 to-green-400 h-28 rounded mt-14">
            <p className="text-6xl bg-gradient-to-r from-green-500 to-green-400 px-5 py-7 my-auto rounded-md -mt-8 mr-10 ">
              <FaUserCheck></FaUserCheck>
            </p>
            <div className="my-auto">
              <p className="text-4xl font-bold ">56,589</p>
              <p className=" text-slate-600 font-bold">Students Enrolled</p>
            </div>
          </div>

          <div className="flex justify-center bg-gradient-to-r from-green-300 via-green-300 to-green-400 h-28 rounded mt-14">
            <p className="text-6xl bg-gradient-to-r from-green-500 to-green-400 px-5 py-7 my-auto rounded-md -mt-8 mr-10">
              <FaUserCheck></FaUserCheck>
            </p>
            <div className="my-auto">
              <p className="text-4xl font-bold ">26,589</p>
              <p className=" text-slate-600 font-bold">Classes Completed</p>
            </div>
          </div>

          <div className="flex justify-center bg-gradient-to-r from-green-300 via-green-300 to-green-400 h-28 rounded mt-14 ">
            <p className="text-6xl bg-gradient-to-r from-green-500 to-green-400 px-5 py-7 my-auto rounded-md -mt-8 mr-10">
              <FaUserCheck></FaUserCheck>
            </p>
            <div className="my-auto">
              <p className="text-4xl font-bold ">20%</p>
              <p className=" text-slate-600 font-bold">Learner Report</p>
            </div>
          </div>

          <div className="flex justify-center bg-gradient-to-r from-green-300 via-green-300 to-green-400 h-28 rounded mt-14">
            <p className="text-6xl bg-gradient-to-r from-green-500 to-green-400 px-5 py-7 my-auto rounded-md -mt-8 mr-10">
              <FaUserCheck></FaUserCheck>
            </p>
            <div className="my-auto">
              <p className="text-4xl font-bold ">6,589</p>
              <p className=" text-slate-600 font-bold">Top Instructors</p>
            </div>
          </div>

      </div>

        <div className="hidden lg:block">
          <img className="lg:w-2/3 mx-auto" src={minidash} alt="Mini Dashboard" />
        </div>
       
      </div>
    </div>
  );
};

export default MiniDashboard;
