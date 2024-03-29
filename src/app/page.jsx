"use client"

import HomeLayout from "@/layout/HomeLayout";
import {
  motion
} from "framer-motion";

export default function Home() {
  return (
    <HomeLayout>
      <section className="my-44 w-[45%] text-center mx-auto">
        <h2 className="text-6xl font-medium">Building the next generation of game creators in Africa.</h2>
        <p className="p-4">"Building the next generation of game creators and gamers, one step, one city, one region at a time, while fostering inclusive representation of Africans in the gaming industry."</p>
        <div>
          <motion.button whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }} className="bg-white text-[#040404] p-3 rounded-md text-sm font-medium">Join Our Community</motion.button>
          <motion.button whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }} className="bg-[#406AFF] text-white p-3 rounded-md text-sm font-medium ml-6">Learn More</motion.button>
        </div>
      </section>
      <section className="h-[200px]">
        <div className="relative w-1/2 mx-auto">
          <div className="border-2 origin-top-left border-white rounded-[20px] absolute top-0 w-full rotate-[-2.90deg] bg-[#0F0F0F] top-10 h-[120px]"></div>
          <div className="border-2 absolute top-0 left-6 w-full bg-[#0F0F0F] border-white -rotate-1 rounded-[20px] h-[150px]">
            <p className="text-4xl p-4 font-medium my-4 text-center">Gameverse Africa <br />
              Ecosystem</p>
          </div>
        </div>
      </section>
      <section className="w-[80%] my-10 mx-auto">
        <div className="flex justify-between">
          <div className="border w-1/2 border-[#6D6D6D] bg-[#0B0B0B] rounded-xl p-4">
            <img src="/images/img.png" alt="" />
            <div className="flex">
              <img className="w-1/2" src="/images/img1.png" alt="" />
              <img className="w-1/2" src="/images/img2.png" alt="" />
            </div>
          </div>
          <div className="border w-1/2 ml-4 border-[#6D6D6D] bg-[#0B0B0B] rounded-xl p-4">
            <div className="h-[250px] my-12">
              <div className="relative w-[80%] mx-auto">
                <div className="border-2 origin-top-left border-white rounded-[20px] absolute top-0 w-full rotate-[-4.90deg] bg-[#0F0F0F] top-14 h-[150px]"></div>
                <div className="border-2 absolute top-0 left-6 w-full bg-[#0F0F0F] border-white -rotate-1 rounded-[20px] h-[200px]">
                  <p className="text-4xl p-4 font-medium my-4 text-center">Game Development Education in underserve regions</p>
                </div>
              </div>
            </div>
            <p className="text-center w-[80%] mx-auto text-lg">Gameverse Africa is a dedicated in Game development education accessibility in Africa. Focusing on providing education in underserved and rural communities, with a specific emphasis on Nigeria and Africa at large</p>
            <div className="text-center my-6">
              <motion.button whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }} className="text-[#479F6A] hover:bg-white p-3 rounded-md flex justify-between mx-auto">Learn More <img className="w-6 my-auto ml-4" src="/images/arrow.svg" alt="" /></motion.button>
            </div>
          </div>

        </div>
      </section>
      <section className="my-10">
        <div className="flex">
          <div className="w-1/2 bg-[#0B0B0B] p-28">
            <img src="/images/garnr.png" className="w-1/2 my-10 mx-auto" alt="" />
            <div className="h-[240px]">
              <div className="relative w-[80%] mx-auto">
                <div className="border-2 origin-top-left border-white rounded-[20px] absolute top-0 w-full rotate-[-4.90deg] bg-[#0F0F0F] top-14 h-[170px]"></div>
                <div className="border-2 absolute top-0 left-6 w-full bg-[#0F0F0F] border-white -rotate-1 rounded-[20px] h-[220px]">
                  <p className="text-4xl p-8 font-medium my-4">"Find, Connect, & Hire Creators in Africa."</p>
                </div>
              </div>
            </div>

            <div className="text-center my-6">
              <motion.button whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }} className="text-white btn p-3 rounded-md flex justify-between mx-auto">Continue <img className="w-6 my-auto ml-4" src="/images/arrow-white.svg" alt="" /></motion.button>
            </div>
          </div>
          <div className="w-1/2">
            <img src="/images/app.png" alt="" />
          </div>
        </div>
      </section>
      <section className="w-[80%] my-10 mx-auto">
        <div className="flex justify-between">
          <div className="border w-1/2 border-[#6D6D6D] bg-[#0B0B0B] rounded-xl p-4">
            <img src="/images/img3.png" alt="" />
            <div className="flex">
              <img className="w-1/2" src="/images/img4.png" alt="" />
              <img className="w-1/2" src="/images/img5.png" alt="" />
            </div>
          </div>
          <div className="border w-1/2 ml-4 border-[#6D6D6D] bg-[#0B0B0B] rounded-xl p-4">
            <div className="h-[250px] my-12">
              <div className="relative w-[80%] mx-auto">
                <div className="border-2 origin-top-left border-white rounded-[20px] absolute top-0 w-full rotate-[-4.90deg] bg-[#0F0F0F] top-14 h-[150px]"></div>
                <div className="border-2 absolute top-0 left-6 w-full bg-[#0F0F0F] border-white -rotate-1 rounded-[20px] h-[200px]">
                <img src="/images/sps.png" className="w-[80%] mx-auto my-8" alt="" />
                </div>
              </div>
            </div>
            <p className="text-center w-[80%] mx-auto text-lg">Six Path Studio is a game studio that builds beautiful and culturally rich games for education, fun, and captivating storytelling adventures. We strive to positively impact the gaming industry by creating games for all and fostering cultural appreciation and understanding.</p>
            <div className="text-center my-6">
              <motion.button whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }} className="text-[#479F6A] hover:bg-white p-3 rounded-md flex justify-between mx-auto">Learn More <img className="w-6 my-auto ml-4" src="/images/arrow.svg" alt="" /></motion.button>
            </div>
          </div>

        </div>
      </section>
    </HomeLayout>
  );
}
