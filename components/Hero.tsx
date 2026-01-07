import useMetadata from '../hooks/useMetadata';
import React from 'react';

export const Hero: React.FC = () => {
  useMetadata(
    "Holistic Overseas | Leading Agricultural Exporters from India", 
    "Premium quality agricultural products exported globally. Specializing in high-grade spices, grains, and pulses with a commitment to excellence and reliability."
  );
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white text-neutral-900 flex flex-col">
      <div className="absolute inset-0 transition-all duration-1000">
        <img 
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=2000" 
          alt="Port with Stacked Containers and Cranes" 
          className="w-full h-full object-cover brightness-[1.1] contrast-[1.1] scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/95"></div>
      </div>
      
      <div className="relative z-10 flex flex-col h-full p-8 md:p-16 justify-between">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
          </div>
        </div>

        <h1 className="mt-16 text-[18vw] leading-[0.9] font-display uppercase tracking-wider text-transparent [-webkit-text-stroke:4px_black] select-none">
          Holistic<br />Overseas
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-neutral-200 pt-8 gap-8">
          <div className="w-full text-xs md:text-sm uppercase leading-tight font-light tracking-wide bg-white/60 p-6 backdrop-blur-xl border border-neutral-200 shadow-2xl">
            A premier import-export powerhouse specializing in bulk commodities, complex logistics, and strategic trade lanes for the modern global marketplace.
          </div>
          {/* <div className="flex flex-col items-end">
             <div className="font-display text-5xl md:text-7xl text-[rgba(55,205,250)] drop-shadow-[0_0_30px_rgba(55,205,250,0.3)]">01 // 25</div>
             <div className="text-[10px] uppercase tracking-[0.3em] opacity-80 font-black">Strategic Intelligence</div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
