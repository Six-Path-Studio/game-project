import Link from 'next/link';
import React from 'react';
import {
  motion
} from "framer-motion";

const HeaderNav = () => {
  return (
    <header className='fixed p-6 top-0 w-full z-30 lg:px-32 px-4 bg-transparent flex justify-between'>
      <Link href={"/"}>
        <img className='lg:w-40 w-1/2' src="/images/logo.svg" alt="" />
      </Link>
      <div className='lg:flex hidden justify-between w-[40%] my-auto text-sm'>
        <Link href={"/about"}>
          <p>About</p>
        </Link>
        <Link href={"/garnr"}>
          <p>Garnr</p>
        </Link>
        <p>Game Studio</p>
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
      <div className='lg:hidden block'></div>
    </header>
  );
};

export default HeaderNav;