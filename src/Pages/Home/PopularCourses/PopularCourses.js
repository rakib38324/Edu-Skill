import React from 'react';
import { FaUserCircle } from "react-icons/fa";

const PopularCourses = () => {
  return (
    <div className='mt-10'>
      <div className='text-3xl text-center text-green-600 font-bold'>
        <p className=''>Popular Courses</p>
        <p className='text-4xl text-cyan-800 '>Expand Your Career Opportunity <br /> with Our Courses</p>
      </div>

      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Node.Js for begineers Go from Zero to Hero</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
            <p className='flex'>
              <p className=' mx-auto'><FaUserCircle></FaUserCircle></p>
              <p>Total Student: 1</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;