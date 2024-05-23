"use client"

import HomeLayout from '@/layout/HomeLayout';
import React from 'react';
import {
  motion
} from "framer-motion";

const merch = () => {
  const stacks = ["Tote Bags", "Shirts", "Assesories", "Caps", "Trousers", "Stickers", "Bags"]
  return (
    <HomeLayout>
      <div>
        <section className="my-44 lg:w-[60%] w-[90%] text-center mx-auto">
          <h2 className="lg:text-6xl text-4xl font-medium">"Unveil Your Style: Explore Our Fashion-Focused Merch Store Today!"</h2>
          <p className="p-4">...creativity meets style!</p>
          <div className="relative z-10">
            <motion.button whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }} className="bg-[#406AFF] text-white p-3 px-6 rounded-md text-sm font-medium ml-6">Coming Soon</motion.button>
          </div>
        </section>

        <section className='bg-[#121914] relative lg:p-12 p-4 my-12 lg:mx-32'>
          <img src="/images/pattern.svg" alt="" className='absolute left-0 top-0' />
          <h2 className='lg:text-4xl text-3xl lg:w-[60%] font-medium'>What can you shop from our Gameverse Africa Merch store.</h2>
          <div className='flex mt-6 lg:w-[72%] flex-wrap '>
            {stacks.map((stack, index) => <button key={index} className='flex mr-4 lg:min-w-40 lg:px-6 my-2 bg-[#FFFFFF1A] p-3 justify-between rounded-md'>
              <img className='my-auto' src="/images/cloud.svg" alt="" />
              <p className='lg:text-base text-sm ml-3'>{stack}</p>
            </button>)}
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default merch;