import React from 'react';
import { FaUserCircle,FaInfoCircle } from "react-icons/fa";
import img from '../../../Images/minidash.jpg'

const PopularCourses = () => {
  return (
    <div className='mt-10 m-2'>
      <div className='text-3xl text-center text-green-600 font-bold'>
        <p className=''>Popular Courses</p>
        <p className='text-4xl text-cyan-800 '>Expand Your Career Opportunity <br /> with Our Courses</p>
      </div>

      <div className='lg:grid lg:grid-cols-4 gap-2 mt-5'>
        
        
        <div className="card bg-base-100 shadow-xl">
          <figure><img className='sm:w-1/2 lg:w-full lg:h-64' src={img} alt="profile" /></figure>
          
          <div className="card-body">
            <h2 className="card-title">Node.Js for begineers Go from Zero to Hero</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
            <div className='grid grid-cols-12 '>
              <p className='col-span-1 my-auto text-green-500 text-2xl'><FaUserCircle></FaUserCircle></p>
              <p className='col-span-11 ml-2 text-xl font-bold'>Total Student: 1</p>
            </div>

            <div className='grid grid-cols-12 mt-2'>
            <p className='col-span-1 my-auto text-yellow-400 text-xl'><FaInfoCircle></FaInfoCircle></p>
              <p className='col-span-11 ml-2 text-xl'>Last Update: 12-01-2023</p>
            </div>
            
            <p className='text-2xl text-green-500 font-bold'>$23</p>
            
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure><img className='sm:w-1/2 lg:w-full lg:h-64' src={img} alt="profile" /></figure>
          
          <div className="card-body">
            <h2 className="card-title">Node.Js for begineers Go from Zero to Hero</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
            <div className='grid grid-cols-12 '>
              <p className='col-span-1 my-auto text-green-500 text-2xl'><FaUserCircle></FaUserCircle></p>
              <p className='col-span-11 ml-2 text-xl font-bold'>Total Student: 1</p>
            </div>

            <div className='grid grid-cols-12 mt-2'>
            <p className='col-span-1 my-auto text-yellow-400 text-xl'><FaInfoCircle></FaInfoCircle></p>
              <p className='col-span-11 ml-2 text-xl'>Last Update: 12-01-2023</p>
            </div>
            
            <p className='text-2xl text-green-500 font-bold'>$23</p>
            
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure><img className='sm:w-1/2 lg:w-full lg:h-64' src={img} alt="profile" /></figure>
          
          <div className="card-body">
            <h2 className="card-title">Node.Js for begineers Go from Zero to Hero</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
            <div className='grid grid-cols-12 '>
              <p className='col-span-1 my-auto text-green-500 text-2xl'><FaUserCircle></FaUserCircle></p>
              <p className='col-span-11 ml-2 text-xl font-bold'>Total Student: 1</p>
            </div>

            <div className='grid grid-cols-12 mt-2'>
            <p className='col-span-1 my-auto text-yellow-400 text-xl'><FaInfoCircle></FaInfoCircle></p>
              <p className='col-span-11 ml-2 text-xl'>Last Update: 12-01-2023</p>
            </div>
            
            <p className='text-2xl text-green-500 font-bold'>$23</p>
            
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure><img className='sm:w-1/2 lg:w-full lg:h-64' src={img} alt="profile" /></figure>
          
          <div className="card-body">
            <h2 className="card-title">Node.Js for begineers Go from Zero to Hero</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
            <div className='grid grid-cols-12 '>
              <p className='col-span-1 my-auto text-green-500 text-2xl'><FaUserCircle></FaUserCircle></p>
              <p className='col-span-11 ml-2 text-xl font-bold'>Total Student: 1</p>
            </div>

            <div className='grid grid-cols-12 mt-2'>
            <p className='col-span-1 my-auto text-yellow-400 text-xl'><FaInfoCircle></FaInfoCircle></p>
              <p className='col-span-11 ml-2 text-xl'>Last Update: 12-01-2023</p>
            </div>
            
            <p className='text-2xl text-green-500 font-bold'>$23</p>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default PopularCourses;