import React from 'react';
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import LandingVideo from "@/components/LandingVideo.client";
import ImageSwitcher from "@/components/landing-buttons.client"
import ImageGallery from '@/components/landing-expectations';
import AboutUsPage from '@/components/about-us';
import Pricing from '@/components/pricing';

const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingVideo />
      <LandingContent />
      <ImageSwitcher />
      <ImageGallery />
      <AboutUsPage />
      <Pricing />
    </div>
   );
}
 
export default LandingPage;

