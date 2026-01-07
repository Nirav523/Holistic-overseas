import useMetadata from '../hooks/useMetadata';
import React from 'react';

export const Intro: React.FC = () => {
  useMetadata(
    "About Holistic Overseas | Our Journey & Expertise", 
    "Learn how Holistic Overseas bridges the gap between Indian farmers and global markets through sustainable sourcing and rigorous quality standards."
  );
  return (
    <section className="w-full py-12 px-8 md:px-16 flex flex-col items-center justify-center bg-white">
      <div className="max-w-4xl text-center space-y-12">
        <div className="text-xs font-bold text-[rgba(55,205,250)] uppercase tracking-[0.4em]">
          The Commerce Conduit
        </div>
        <p className="text-2xl md:text-4xl text-neutral-900 font-light leading-snug uppercase">
          Holistic Overseas was founded to simplify the intricate web of international trade. We act as the vital link between manufacturers and global demand, leveraging deep logistics intelligence to move commodities with surgical precision.
        </p>
        <div className="flex justify-center pt-8">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200" 
            alt="Cargo Ship in Port - Logistics" 
            className="w-full max-w-3xl transition-all border-4 border-neutral-100 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
