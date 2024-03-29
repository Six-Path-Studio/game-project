import React from 'react';
import HomeLayout from "@/layout/HomeLayout";

const garnr = () => {
  return (
    <HomeLayout>
      <section className='btn w-full px-32 pt-32 flex justify-evenly'>
        <div className='w-1/2 my-auto'>
          <div className='border-2 w-[70%]  my-auto p-4 text-5xl rotate-[2.17deg] rounded-[12px] my-auto border-[#CECECE] bg-[#0F0F0F]'>
            Find, Connect
            & hire creators
            in Africa.
          </div>
        </div>
        <div className='w-1/2'>
          <img className='w-[80%]' src="/images/app-2.png" alt="" />
        </div>
      </section>
      <section className='px-32 py-12'>
        <div className='btn rotate-[2.17deg] w-52 text-center p-3 rounded-md text-xl'>
          Our Main Focus
        </div>
        <div className='flex my-10 justify-between'>
          <div className='border relative p-4 border-[#6D6D6D] rounded-md'>
            <img src="/images/image-1.png" alt="" />
            <div className='absolute bottom-6 w-[75%] left-0 right-0 mx-auto bg-[#0F0F0F] border-2 border-[#CECECE] text-2xl p-3 rounded-md'>
              Find, Connect
              & hire creators
              in Africa.
            </div>
          </div>
          <div className='border relative p-4 border-[#6D6D6D] rounded-md'>
            <img src="/images/image-2.png" alt="" />
            <div className='absolute bottom-6 w-[75%] left-0 right-0 mx-auto bg-[#0F0F0F] border-2 border-[#CECECE] text-2xl p-3 rounded-md'>
              A creative hub
              for creatives
              in Africa
            </div>
          </div>
          <div className='border p-4 relative border-[#6D6D6D] rounded-md'>
            <img src="/images/image-3.png" alt="" />
            <div className='absolute bottom-6 w-[75%] left-0 right-0 mx-auto bg-[#0F0F0F] border-2 border-[#CECECE] text-2xl p-3 rounded-md'>
              A creative hub
              for gamers &
              pro-gamers
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default garnr;