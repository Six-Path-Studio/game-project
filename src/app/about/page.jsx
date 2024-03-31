import CTA from '@/components/CTA';
import HomeLayout from '@/layout/HomeLayout';
import React from 'react';

const about = () => {
  return (
    <HomeLayout>
      <section className="my-44 lg:w-[45%] text-center mx-auto">
        <h2 className="lg:text-6xl text-4xl font-medium">What do we do at Gameverse Africa Education?</h2>
        <p className="p-4">"Gameverse is dedicated in revolutionizing game development education accessibility in Africa, starting with Nigeria. Committed in unlocking the full potential of individuals, it focuses on game providing education in undeserved and rural communities within Nigeria."</p>
        {/* <div>
          <motion.button whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }} className="bg-white text-[#040404] p-3 rounded-md text-sm font-medium">Join Our Community</motion.button>
          <motion.button whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }} className="bg-[#406AFF] text-white p-3 rounded-md text-sm font-medium ml-6">Learn More</motion.button>
        </div> */}
      </section>
      <section className="lg:w-[80%] rounded-xl bg-[#F0F0F0] lg:p-0 p-4 my-10 mx-auto">
        <div className="lg:flex justify-between">
          <div className="bg-[#FFFFFF] lg:w-1/2 rounded-xl p-4">
            <img src="/images/img.png" alt="" />
            <div className="flex">
              <img className="w-1/2" src="/images/img1.png" alt="" />
              <img className="w-1/2" src="/images/abt-1.png" alt="" />
            </div>
          </div>
          <div className="text-black lg:mt-0 mt-4 lg:w-1/2 lg:ml-4 rounded-xl p-4">
            <div className="my-12">
              <div className=" w-[80%] mx-auto">
                <div className="btn mx-auto lg:w-[60%] rotate-[-0.90deg] rounded-[10px]">
                  <p className="lg:text-3xl text-3xl p-2 my-4 text-white text-center">Our Story</p>
                </div>
              </div>
            </div>
            <p className="text-center lg:w-[80%] mx-auto lg:text-lg">We recognize the challenges within the African gaming space, particularly the limited accessibility, especially in undeserved regions, and lack of resources, which hinder aspiring creatives, especially game creators from pursuing their dreams.</p>

            <p className="text-center lg:w-[80%] mx-auto lg:text-lg">Hence, there is a need to establish a thriving game development ecosystem in Africa, mainly targeting regions where access to game development resources is limited. We aim to provide the necessary infrastructure, training, and support for aspiring game developers to thrive in their respective cities and contribute to the growth of the African gaming industry.</p>
            {/* <div className="text-center my-6">
              <motion.button whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }} className="text-[#479F6A] hover:bg-white p-3 rounded-md flex justify-between mx-auto">Learn More <img className="w-6 my-auto ml-4" src="/images/arrow.svg" alt="" /></motion.button>
            </div> */}
          </div>

        </div>
      </section>
      <section className='lg:w-[60%] mx-auto my-20'>
        <div className='border-2 border-[#CECECE] lg:w-1/2 w-[70%] mx-auto text-center p-3 rounded-[10px] rotate-[2.17deg] text-3xl'>Our Aim</div>
        <div className='lg:flex mt-10 justify-between'>
          <div className='bg-[#F0F0F0] m-4 lg:w-1/2 rounded-md p-6'>
            <div className='btn w-[80%] mx-auto my-6  p-3 text-center rounded-xl rotate-[1.68deg]'>Industry Development</div>
            <p className='text-center text-black'>We aim to develop the gaming industry in Africa by continuously developing comprehensive and industry-relevant educational programs, catering to beginners and experienced developers, and equipping individuals with the skills needed to excel in the game industry.</p>
          </div>
          <div className='bg-[#F0F0F0] m-4 lg:w-1/2 rounded-md p-6'>
            <div className='btn w-[80%] mx-auto my-6 p-3 text-center rounded-xl  rotate-[1.02deg]'> Expand & Access</div>
            <p className='text-center text-black'>We strive to reach cities and regions where game development education is lacking, ensuring aspiring developers have equal opportunities to learn and grow.</p>
          </div>
        </div>
      </section>
      <CTA />
    </HomeLayout>
  );
};

export default about;