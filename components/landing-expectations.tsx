import React from 'react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"; // assuming this import is valid

const ImageGallery = () => {
  const images = [
    { title: 'Text to Image', description: 'This AI function converts written descriptions into matching images. It uses deep learning to analyze the text and generate corresponding visuals, proving useful for creating custom graphics and conceptual illustrations.', src: '/Alp1.jpg' },
    { title: 'Reimagine', description: 'Reimagine uses AI to transform existing visuals into new artistic interpretations. It modifies styles and contexts to create unique digital art pieces, blending traditional creativity with modern technology.', src: '/Alp2.jpg' },
    { title: 'Remove Background', description: 'This function uses machine learning to isolate image subjects from their backgrounds. Ideal for professional photo editing, graphic design, and e-commerce, it cleanly extracts foreground subjects from any backdrop.', src: '/Alp3.jpg' },
    { title: 'Upscale Image', description: 'This AI function improves image resolution without distortion. It predicts and fills in additional details based on surrounding pixels, making it perfect for enhancing low-resolution images or old photos.', src: '/Alp4.jpg' },
    { title: 'Motion Blend', description: 'Motion Blend merges multiple movements into fluid motion using machine learning. Used in video game development, animation, and film production, it creates seamless transitions and realistic motion effects.', src: '/Taj1.jpg' },
    { title: 'Text to Speech', description: 'This function converts written text into spoken words, emulating human speech patterns. It is useful for voiceovers, assisting visually impaired users, and developing voice-activated systems.', src: '/Taj2.jpg' },
  ];

  return (
    <div className="flex flex-col justify-center items-center my-1 m-10 mb-4">
      <h1 className="text-4xl font-bold text-center mt-16 mb-6 text-white flex items-center justify-center gap-2">New Features <Badge variant="premium" className="uppercase text-2xl py-1">COMING SOON</Badge></h1>
      <p className="text-xl font-semibold text-center mb-12 text-muted-foreground">Be ready to explore new possibilities of our AI in the nearest future</p>
      <div className="grid grid-cols-2 gap-12 w-full md:max-w-[1200px]">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative w-full pt-[56.25%] rounded-[10px] overflow-hidden shadow-custom-light">
              <Image 
                src={image.src} 
                alt={image.title}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg mt-1 font-semibold leading-none tracking-tight text-white">{image.title}</h3>
              <p className="text-sm text-muted-foreground pt-4 mb-8 ">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
