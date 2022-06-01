import React from 'react';
import './HomeScreen.css'
const HomeScreen = () => {
    return (
        <section className="banner">
    
            <div className='flex flex-col space-y-5 items-center justify-center font-poppins h-[70vh]'>
                <h1 className='text-center text-3xl md:text-4xl text-slate-700 font-semibold '>Best Food waiting for your belly</h1>
                <div className='relative text-sm'>
                    <input className='bg-gray-100 pl-3  h-10 outline-none rounded-full w-72 ' type="text" name="" id="" placeholder='Search Food' />
                    <button className='bg-rose-700 rounded-full px-4 h-10 ring-2 ring-offset-1 ring-gray-100 text-white absolute right-0'>Search</button>
                </div>
            </div>
      </section>
    );
};

export default HomeScreen;