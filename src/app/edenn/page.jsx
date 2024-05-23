import React from 'react';
import HomeLayout from "@/layout/HomeLayout";

const garnr = () => {
  const stacks = ["Content Creators", "Gamers", "Game Developer", "Designer", "Community Managers", "3D / 2D Artist", "Motion Designers", "Influencers", "Writers", "Cinematographer", "Developers", "Animators", "PMs", "VFx Artists", "Social Media Managers", "Voice Artist"]
  return (
    <HomeLayout>
      <section className='btn w-full lg:px-32 px-4 pt-32 lg:flex justify-evenly'>
        <div className='lg:w-1/2 my-auto'>
          <div className='border-2 lg:w-[70%]  my-auto p-4 text-5xl rotate-[2.17deg] rounded-[12px] my-auto border-[#CECECE] bg-[#0F0F0F]'>
            Find, Connect
            & hire creators
            in Africa.
          </div>
        </div>
        <div className='lg:w-1/2 lg:mt-0 mt-10'>
          <img className='lg:w-[80%]' src="/images/app-2.png" alt="" />
        </div>
      </section>
      <section className='lg:px-32 py-12'>
        <div className='btn rotate-[2.17deg] w-52 sm:mx-auto text-center p-3 rounded-md text-xl'>
          Our Main Focus
        </div>
        <div className='lg:flex sm:p-4 my-10 justify-between'>
          <div className='border relative p-4 border-[#6D6D6D] rounded-md'>
            <img src="/images/image-1.png" alt="" />
            <div className='absolute bottom-6 w-[75%] left-0 right-0 mx-auto bg-[#0F0F0F] border-2 border-[#CECECE] text-2xl p-3 rounded-md'>
              Find, Connect
              & hire creators
              in Africa.
            </div>
          </div>
          <div className='border sm:mt-4 relative p-4 border-[#6D6D6D] rounded-md'>
            <img src="/images/image-2.png" alt="" />
            <div className='absolute bottom-6 w-[75%] left-0 right-0 mx-auto bg-[#0F0F0F] border-2 border-[#CECECE] text-2xl p-3 rounded-md'>
              A creative hub
              for creatives
              in Africa
            </div>
          </div>
          <div className='border sm:mt-4 p-4 relative border-[#6D6D6D] rounded-md'>
            <img src="/images/image-3.png" alt="" />
            <div className='absolute bottom-6 w-[75%] left-0 right-0 mx-auto bg-[#0F0F0F] border-2 border-[#CECECE] text-2xl p-3 rounded-md'>
              A creative hub
              for gamers &
              pro-gamers
            </div>
          </div>
        </div>
      </section>

      <section className="lg:mx-32 lg:my-10">
        <div className="lg:flex">
          <div className="btn lg:w-1/2">
            <img src="/images/app-3.png" className='mx-auto lg:mt-20 w-[60%]' alt="" />
          </div>
          <div className="lg:w-1/2 bg-[#0B0B0B] lg:p-10 p-4">
            <div className="h-[240px]">
              <div className="relative lg:w-[80%] w-[80%] mx-auto">
                <div className="border-2 absolute top-0 lg:left-6 w-full bg-[#0F0F0F] border-white -rotate-1 rounded-[20px]">
                  <img src="/images/garnr.png" className="w-1/2 my-16 mx-auto" alt="" />
                </div>
              </div>
            </div>
            <p className='text-center text-lg '>Edenn is your all-in-one platform for Africa’s creative and interactive media industry. Connect with top talent, find creatives, hire creators, connect with gamers, and collaborate seamlessly.
              <br />
              Join us in shaping Africa’s creative space and beyond.</p>
          </div>

        </div>
      </section>
      <section className='bg-[#241834] lg:p-12 p-4 my-12 lg:mx-32'>
        <h2 className='lg:text-4xl text-3xl w-80 font-medium'>Who should be on edenn?</h2>
        <div className='flex mt-6 flex-wrap '>
          {stacks.map((stack, index) => <button key={index} className='flex mr-4 lg:min-w-52 lg:px-6 my-2 bg-[#FFFFFF1A] p-3 justify-between rounded-md'>
            <img className='my-auto' src="/images/cloud.svg" alt="" />
            <p className='lg:text-base text-sm ml-3'>{stack}</p>
          </button>)}
        </div>
      </section>
      <section className='bg-[#121A14] sm:my-10 lg:mx-32'>
        <div className='lg:flex px-10'>
          <div className='lg:w-[30%]'>
            <img src="/images/app-4.png" alt="" />
          </div>
          <div className='lg:w-[70%] lg:p-8 sm:py-10 my-auto'>
            <h1 className='lg:text-6xl text-3xl font-bold'>Dont’ hesitate any longer, download the edenn app now!</h1>
            <p className='my-6'>Available on Google Play-store and Apple Store</p>

            <div>
              <button className="bg-white text-[#040404] p-3 rounded-md text-sm font-medium">Join Our Community</button>
              <button className="bg-[#406AFF] text-white p-3 rounded-md text-sm font-medium ml-6">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default garnr;