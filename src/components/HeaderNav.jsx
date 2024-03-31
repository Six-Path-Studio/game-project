import Link from 'next/link';
import React, { useState } from 'react';
import {
  motion
} from "framer-motion";

const HeaderNav = () => {
  const [show, setShow] = useState(false)
  return (
    <header className='fixed p-6 top-0 w-full z-30 lg:px-32 px-4 bg-transparent flex justify-between'>
      <Link href={"/"} className='my-auto'>
        <img className='lg:w-40 w-1/2 my-auto' src="/images/logo.svg" alt="" />
      </Link>
      <div className='lg:flex hidden justify-between w-[40%] my-auto text-sm'>
        <Link href={"/about"}>
          <p>About</p>
        </Link>
        <Link href={"/garnr"}>
          <p>Garnr</p>
        </Link>
        <a href="https://sixpathstudio.xyz/">        <p>Game Studio</p></a>
        <Link href={"/gallery"}>
          <p>Gallery</p>
        </Link>
        <p>Blog</p>
        <p>Community</p>
      </div>
      <div className='lg:block hidden'>
        <motion.button whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }} className='bg-white p-2 rounded-sm text-[#040404] text-sm'>Join Us</motion.button>
        <motion.button whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }} className='bg-[#2BC055] p-2 rounded-sm ml-3 text-sm text-white'>Contact Us</motion.button>
      </div>
      <div onClick={() => setShow(!show)} className='lg:hidden cursor-pointer block bg-[#F0F0F0]'>
        <img className='w-10 h-10 p-2' src="/images/hamburger.png" alt="" />
      </div>
      {show && <div className='fixed top-0 left-0 bg-[#F0F0F0] p-6 h-full w-full'>
        <img onClick={() => setShow(false)} src="/images/close.png" className='w-6 cursor-pointer ml-auto' alt="" />
        <div className='text-black text-xl'>
          <Link href={"/about"}>
            <p className='my-4'>About</p>
          </Link>
          <Link href={"/garnr"}>
            <p className='my-4'>Garnr</p>
          </Link>
          <a href="https://sixpathstudio.xyz/"><p className='my-4'>Game Studio</p>
          </a>
          <Link href={"/gallery"}>
            <p className='my-4'>Gallery</p>
          </Link>
          <p className='my-4'>Blog</p>
          <p className='my-4'>Community</p>


          <motion.button whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }} className='bg-[#5627FF] p-2 rounded-sm my-4 text-white w-full text-sm'>Join Us</motion.button>
          <br />
          <motion.button whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }} className='bg-[#2BC055] p-2 rounded-sm mt-4 text-sm w-full text-white'>Contact Us</motion.button>
        </div>
      </div>}
    </header>
  );
};

export default HeaderNav;