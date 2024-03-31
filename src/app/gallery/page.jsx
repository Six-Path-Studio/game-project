import React from 'react';
import HomeLayout from "@/layout/HomeLayout";
import CTA from '@/components/CTA';

const gallery = () => {
  const images = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]
  return (
    <HomeLayout>
      <section className='mt-32'>
        <div className='border-2 border-[#CECECE] mx-auto rotate-[2.17deg] w-52 text-center p-3 rounded-md text-xl'>
          Our Gallery
        </div>
        <div className='grid-cols-3 gap-3	grid lg:px-32 px-4 py-12'>
          {images.map((single, index) => <img key={index} className='h-full my-3 object-cover' src={'/images/gallery/item-' + index + '.png'} />)}
        </div>
      </section>
      <CTA />
    </HomeLayout>
  );
};

export default gallery;