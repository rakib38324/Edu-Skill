import React from 'react';
import banner from '../../../Images/Banner.jpg'

const Banner = () => {
    return (
        <div className='md:grid md:grid-cols-2'>
            <div>
                <img className='w-2/3 mx-auto  md:w-full' src={banner} alt="banner" />
            </div>
            <div className='my-auto m-2'> 
                <p className='text-4xl text-center  lg:text-6xl md:text-start mb-2 font-medium text-green-600'>Improve Your Online</p>
                <p className='text-4xl text-center  lg:text-6xl md:text-start mb-2 font-medium text-green-600'>Learning Experience</p> 
                <p className='text-4xl text-center  lg:text-6xl md:text-start  font-medium text-green-600'> Better Instantly</p>

                <p className='text-start pt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt commodi fuga dolor nobis in enim beatae? Laborum nostrum, iure aspernatur molestiae quisquam qui facere, provident eveniet reiciendis fuga distinctio?</p>

                <button className='bg-green-300 py-3 px-4 rounded mt-5 text-xl font-semibold'>Get Start</button>
            </div>
           
        </div>
    );
};

export default Banner;