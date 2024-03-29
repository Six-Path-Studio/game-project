import React from 'react';

const Footer = () => {
  return (
    <div className='p-20'>
      <footer className='flex p-10 text-[#FFFFFF80] justify-evenly bg-[#0B0B0B]'>
        <div>
          <img src="/images/logo.svg" className='w-32 mb-4' alt="" />
          <p className='text-sm my-1'>Port Harcourt, <br />
            Nigeria</p>
        </div>
        <div>
          <p className='font-bold text-white mb-4'>Ecosystem</p>
          <p className='text-sm my-1'>Game Education</p>
          <p className='text-sm my-1'>Game Studio</p>
          <p className='text-sm my-1'>Garnr</p>
          <p className='text-sm my-1'>Community</p>
        </div>
        <div>
          <p className='font-bold text-white mb-4'>Extra</p>
          <p className='text-sm my-1'>Our Gallery</p>
          <p className='text-sm my-1'>Our Blog</p>
          <p className='text-sm my-1'>Creativess</p>
          <p className='text-sm my-1'>Community</p>
        </div>
        <div>
          <p className='font-bold text-white mb-4'>Links:</p>
          <p className='text-sm my-1'>Book a meeting</p>
          <p className='text-sm my-1'>Send Us a mail</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;