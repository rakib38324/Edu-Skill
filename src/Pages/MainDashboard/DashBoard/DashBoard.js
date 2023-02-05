import React from "react";
import { FaBookOpen, FaGraduationCap, FaTrophy } from "react-icons/fa";
import img from '../../../Images/minidash.jpg'

const DashBoard = () => {
  return (
    <div className="m-5">
      <p className="font-bold text-xl my-5">Dashboard</p>

      <div className="md:grid md:grid-cols-3 gap-3 ">
        <div className="py-12 border-2 border-green-200 hover:shadow-2xl">
          <p className="flex justify-center text-8xl   text-green-500">
            <FaBookOpen></FaBookOpen>
          </p>
          <p className="text-2xl font-bold text-center mt-2">11</p>
          <p className="text-xl font-semibold text-slate-500 text-center mt-2">
            Enrolled Courses
          </p>
        </div>
        <div className="py-12 border-2 border-green-200 hover:shadow-2xl">
          <p className="flex justify-center text-8xl   text-green-500">
            <FaGraduationCap></FaGraduationCap>
          </p>
          <p className="text-2xl font-bold text-center mt-2">6</p>
          <p className="text-xl font-semibold text-slate-500 text-center mt-2">
            Active Courses
          </p>
        </div>
        <div className="py-12 border-2 border-green-200 hover:shadow-2xl">
          <p className="flex justify-center text-8xl   text-green-500">
            <FaTrophy></FaTrophy>
          </p>
          <p className="text-2xl font-bold text-center mt-2">11</p>
          <p className="text-xl font-semibold text-slate-500 text-center mt-2">
            Completed
          </p>
        </div>
      </div>

      <div>
        <p className="text-xl my-5 font-bold">In Progress Courses</p>
        <div>
          <div className="card md:card-side bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-[180px] md:w-[300px] md:h-[180px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUJpkkAAgJhF5FfBvb510FODUc_qeAunA7Q&usqp=CAU" alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web Development</h2>
              <p>Completed Lessons: <span className="text-black font-semibold">7 to 10 lessons</span></p>
              
              <div className="flex">
              <progress className="my-auto progress progress-success w-5/12 lg:w-9/12" value="40" max="100"></progress>
              <p className="font-semibold ml-10">40% Complete</p>
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="my-5">
          <div className="card md:card-side bg-base-100 shadow-xl">
            <figure>
              <img className="full  h-[180px] md:w-[300px] md:h-[180px]" src='https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg' alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web Development</h2>
              <p>Completed Lessons: <span className="text-black font-semibold">7 to 10 lessons</span></p>
              
              <div className="flex">
              <progress className="my-auto progress progress-success w-5/12 lg:w-9/12" value="40" max="100"></progress>
              <p className="font-semibold ml-10">40% Complete</p>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashBoard;
