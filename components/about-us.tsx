'use client'

import React, { useState } from 'react';

const AboutUsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTriangleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center my-10 m-10 mb-4 mt-23">
      <h2 className="text-medium font-medium text-emerald-500 mb-2 mt-12">WHO ARE WE</h2>
      <h1 className="text-3xl font-bold text-white mb-4">About Us</h1>
      <div onClick={handleTriangleClick} className="cursor-pointer mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`h-6 w-6 text-emerald-500 mb-12 transition-transform duration-800 ${isOpen ? 'transform rotate-180' : ''}`}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </div>
      <div className={`w-full md:max-w-[1200px] mx-auto mt-4 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className={`opacity-0 transition-opacity duration-300 ${isOpen ? 'opacity-100 delay-200' : ''}`}>
          <h3 className="text-lg font-semibold leading-none tracking-tight text-white mb-3">Early Life and Career Beginnings</h3>
          <p className="text-sm text-muted-foreground mb-8">Cristiano Ronaldo, born Cristiano Ronaldo dos Santos Aveiro in Funchal, Madeira, Portugal in 1985, displayed a keen talent for football from a young age. His professional career commenced with Sporting Lisbon in Portugal, marking his first step into the competitive world of football.</p>

          <h3 className="text-lg font-semibold leading-none tracking-tight text-white mt-4 mb-3">Manchester United Era</h3>
          <p className="text-sm text-muted-foreground mb-8">In 2003, Ronaldo was signed by Manchester United, a move that significantly amplified his global recognition. Under the mentorship of Sir Alex Ferguson, Ronaldo refined his skills and secured critical acclaim. His time at Manchester United was laden with success, with three English Premier League titles and a UEFA Champions League victory to his name.</p>

          <h3 className="text-lg font-semibold leading-none tracking-tight text-white mt-4 mb-3">Real Madrid and Record-Breaking Success</h3>
          <p className="text-sm text-muted-foreground mb-8">Ronaldos move to Real Madrid in 2009 for a record-breaking transfer fee marked a new chapter in his career. At Madrid, his game flourished, leading to four Champions League titles and two La Liga trophies. He also became the clubs highest goal scorer of all time during his tenure.</p>

          <h3 className="text-lg font-semibold leading-none tracking-tight text-white mt-4 mb-3">Juventus Stint and International Achievements</h3>
          <p className="text-sm text-muted-foreground mb-8">In 2018, Ronaldo switched clubs again, this time joining Juventus in Italy. Even in his mid-thirties, his performance did not falter; he led the team to two Serie A titles. Simultaneously, he has been a significant contributor to the Portugal national team, guiding them to their first major tournament victory at the 2016 European Championship.</p>

          <h3 className="text-lg font-semibold leading-none tracking-tight text-white mt-4 mb-3">Return to Manchester United and Ongoing Legacy</h3>
          <p className="text-sm text-muted-foreground mb-20">In 2021, in a move that delighted fans worldwide, Ronaldo made a sensational return to Manchester United, further exemplifying his lasting influence on the sport. Apart from his exceptional skills on the field, Ronaldo is known for his remarkable work ethic, dedication, and philanthropic endeavors. His journey continues to inspire and his legacy seems far from complete.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
