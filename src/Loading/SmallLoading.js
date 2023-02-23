import React from 'react';

const SmallLoading = () => {
    return (

        <div className='flex justify-center items-center h-full '>
            <p className='text-lg font-bold  text-black'>L</p>
            <div className='w-4 h-4 border-4 mt-1 border-dashed rounded-full animate-spin  border-black'></div>
            <p className='text-lg font-bold   text-black'>a</p>
            <p className='text-lg font-bold   text-black'>d</p>
            <p className='text-lg font-bold   text-black'>i</p>
            <p className='text-lg font-bold   text-black'>n</p>
            <p className='text-lg font-bold   text-black'>g</p>
            <p className='text-lg font-bold  animate-pulse text-black'>.</p>
            <p className='text-lg font-bold  animate-pulse text-black'>.</p>
            <p className='text-lg font-bold  animate-pulse text-black'>.</p>

        </div>

    )
};

export default SmallLoading;