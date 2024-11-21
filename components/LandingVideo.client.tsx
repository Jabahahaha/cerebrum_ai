import React from 'react';

const LandingVideoContent = () => {
  return (
    <div className="flex flex-col justify-center items-center my-1 m-10 mb-4 ">
      <div className="relative w-full md:max-w-[1200px] pt-[75%] rounded-[20px] overflow-hidden shadow-custom-light max-h-[500px]">
        <video
          src="/landingvideo1.mp4" 
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full md:max-w-[1200px] border-t border-[#3a3a3a] h-0.5 my-12 mb-0"></div>
    </div>
  );
}

export default LandingVideoContent;
