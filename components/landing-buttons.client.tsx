'use client'

import React, { useState } from 'react';
import Image from 'next/image';

const ImageSwitcher = () => {
  const [selectedImage, setSelectedImage] = useState('image1');

  return (
    <div className="flex flex-col justify-start items-start my-1 m-10 mt-8 mb-4">
      <h4 className="text-medium font-medium text-emerald-500 mb-2 mt-12">EXPLORE</h4>
      <h2 className="text-3xl font-bold text-white mb-12">Posibilities of Our First Product: Cerebrum GPT</h2>
      <div className="w-full md:max-w-[1200px] flex flex-col items-start mb-4">
        <button onClick={() => setSelectedImage('image1')} className={`w-full text-left p-4 mb-2 group transition rounded-lg cursor-pointer ${selectedImage === 'image1' ? 'text-white bg-[#2b2b2b]' : 'text-neutral-300 hover:text-white hover:bg-[#202020]'}`}>
          <h3 className="text-lg font-semibold leading-none tracking-tight">Button 1</h3>
          <p className="text-sm text-muted-foreground pt-4">Description for Button 1</p>
        </button>
        <button onClick={() => setSelectedImage('image2')} className={`w-full text-left p-4 mb-2 group transition rounded-lg cursor-pointer ${selectedImage === 'image2' ? 'text-white bg-[#2b2b2b]' : 'text-neutral-300 hover:text-white hover:bg-[#202020]'}`}>
          <h3 className="text-lg font-semibold leading-none tracking-tight">Button 2</h3>
          <p className="text-sm text-muted-foreground pt-4">Description for Button 2</p>
        </button>
        <button onClick={() => setSelectedImage('image3')} className={`w-full text-left p-4 mb-10 group transition rounded-lg cursor-pointer ${selectedImage === 'image3' ? 'text-white bg-[#2b2b2b]' : 'text-neutral-300 hover:text-white hover:bg-[#202020]'}`}>
          <h3 className="text-lg font-semibold leading-none tracking-tight">Button 3</h3>
          <p className="text-sm text-muted-foreground pt-4">Description for Button 3</p>
        </button>
      </div>
      <div className="relative w-full md:max-w-[1200px] pt-[50%] rounded-[20px] overflow-hidden shadow-custom-light mb-10">
        {selectedImage === 'image1' && 
        <Image 
            src="/Alp1.jpg" 
            alt="Image 1" 
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full"
        />}
        {selectedImage === 'image2' && 
        <Image 
            src="/Alp2.jpg" 
            alt="Image 2" 
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full"
        />}
        {selectedImage === 'image3' && 
        <Image 
            src="/Alp3.jpg" 
            alt="Image 3" 
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full"
        />}
      </div> 
      <div className="w-full md:max-w-[1200px] border-t border-[#3a3a3a] h-0.5 my-12 mb-0"></div>
    </div>
  );
}

export default ImageSwitcher;
