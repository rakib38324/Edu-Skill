import React from "react";
import { FaUserCircle,FaInfoCircle } from "react-icons/fa";
import img from '../../../Images/Banner.jpg'

const TopArticles = () => {
  return (
    <div className="lg:grid lg:grid-cols-12 bg-base-200 my-2 py-32 rounded-xl">
      <div className="col-span-3 my-auto">
        <div className="text-xl ml-10 text-green-600 font-bold">
          <p className="">Popular Courses</p>
          <p className="text-3xl text-cyan-800 ">
            Want to learn more? <br /> Read Blog
          </p>
          <button className="text-xl mt-10 font-semibold bg-green-500 text-white p-2 rounded-md">
            View All
          </button>
        </div>
      </div>

      <div className="col-span-9 lg:grid lg:grid-cols-3 gap-3 m-2">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className="sm:w-1/2 lg:w-full lg:h-64"
              src={img}
              alt="profile"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              Node.Js for begineers Go from Zero to Hero
            </h2>
             <div className='grid grid-cols-12 '>
              <p className='col-span-1 my-auto text-green-500 text-2xl'><FaUserCircle></FaUserCircle></p>
              <p className='col-span-11 ml-2 text-xl text-slate-500'>By Aminul Islam</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className="sm:w-1/2 lg:w-full lg:h-64"
              src={img}
              alt="profile"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              Node.Js for begineers Go from Zero to Hero
            </h2>
             <div className='grid grid-cols-12 '>
              <p className='col-span-1 my-auto text-green-500 text-2xl'><FaUserCircle></FaUserCircle></p>
              <p className='col-span-11 ml-2 text-xl text-slate-500'>By Aminul Islam</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className="sm:w-1/2 lg:w-full lg:h-64"
              src={img}
              alt="profile"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              Node.Js for begineers Go from Zero to Hero
            </h2>
             <div className='grid grid-cols-12 '>
              <p className='col-span-1 my-auto text-green-500 text-2xl'><FaUserCircle></FaUserCircle></p>
              <p className='col-span-11 ml-2 text-xl text-slate-500'>By Aminul Islam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArticles;
