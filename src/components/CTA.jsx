import React from 'react';


const CTA = () => {
  return (
    <section className="my-10 pattern rounded-xl lg:w-[80%] mx-auto bg-[#F0F0F0] lg:p-10 p-4">
      <div className="lg:w-[50%] mx-auto text-center">
        <h1 className="lg:text-5xl text-3xl font-bold text-[#26AB4C] my-3">Join our community:</h1>
        <p className="p-6 text-black">Join our vibrant community today and embark on a journey of learning, creativity, and innovation. Together, let’s unlock the potential of Africa’s gaming industry and shape the future of interactive entertainment.</p>
        <p className='text-black'>
          You can join our community below.</p>
        <a href="https://chat.whatsapp.com/H9brcZujqA31P0a65CIdno">
          <div className='btn p-3 w-1/2 mx-auto mt-10 rotate-[3.49deg] rounded-xl'>Click to Join</div>
        </a>
        {/* <div className="flex justify-between mt-4">
          <button className="bg-[#5627FF] w-full text-white p-3 rounded-md text-sm font-medium">Click to join our community</button>
          <button className="bg-[#EF5DA8] w-full text-white p-3 rounded-md text-sm font-medium ml-6">Learn More Here</button>
        </div> */}
      </div>
    </section>
  );
};

export default CTA;