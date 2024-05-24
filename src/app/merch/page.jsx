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
        <section className="lg:w-[80%] lg:p-0 p-4 my-10 mx-auto">
          <div className="lg:flex justify-between">
            <div className="lg:w-1/2">
              <img src="/images/merch.png" alt="" />
            </div>
            <div className="lg:mt-0 mt-4 lg:w-1/2 border border-[#6D6D6D] bg-[#0B0B0B] rounded-r-xl p-4">
              <div className="h-[150px] my-12">
                <div className="relative lg:w-[80%] w-[90%] mx-auto">
                  <div className="border-2 origin-top-left border-white rounded-[20px] absolute top-0 w-full rotate-[-4.90deg] bg-[#0F0F0F] lg:h-[160px] p-4 h-[160px]">
                    <img src="/images/store.png" className='mx-auto mt-12' alt="" />
                  </div>
                </div>
              </div>
              <p className="text-center lg:w-[80%] mx-auto lg:text-lg">Welcome to Gameverse Africa's Merch Store, where creativity meets style! Dive into our world of game and anime inspired merchandise crafted for the creative industry, by the creative industry. From trendy apparel to cool accessories like hats and flasks, we've got you covered.</p>
              <div className="text-center my-6">
                <motion.button whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }} className="text-[#FFB800] hover:bg-white p-3 rounded-md flex justify-between mx-auto">Shop now, on Selar <img className="w-6 my-auto ml-4" src="/images/shop.svg" alt="" /></motion.button>
              </div>
            </div>

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