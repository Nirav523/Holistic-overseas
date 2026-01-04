
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-neutral-900 pt-8 md:pt-10 pb-6 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
          <h2 className="text-[12vw] font-display uppercase leading-[0.8] tracking-tighter">
            YOUR <span className="text-[rgba(55,205,250)]">WORLD</span> <br /> AWAITS
          </h2>
          
          <div className="w-full lg:w-1/3 flex flex-col lg:items-end space-y-6">
            <img src="/images/logo.png" alt="Holistic Overseas" className="h-30 w-auto object-contain" />
            {/* <div className="flex gap-6">
               <a href="#" className="text-[rgba(55,205,250)] font-bold text-xs uppercase tracking-widest hover:text-neutral-900 transition-colors">LinkedIn</a>
               <a href="#" className="text-[rgba(55,205,250)] font-bold text-xs uppercase tracking-widest hover:text-neutral-900 transition-colors">Instagram</a>
               <a href="#" className="text-[rgba(55,205,250)] font-bold text-xs uppercase tracking-widest hover:text-neutral-900 transition-colors">Twitter</a>
            </div> */}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-16 border-t border-neutral-200 text-xs uppercase tracking-[0.2em]">
          <div className="space-y-6">
            <h4 className="font-bold text-[rgba(55,205,250)]">Strategic HQ</h4>
            <p className="leading-loose opacity-60">
              1st Floor, Milan Complex,<br />
              Kubernagar, Ahmedabad 382340<br />
              Gujarat, India.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-neutral-900">Contact Us</h4>
            <div className="space-y-2 opacity-60">
              <p>sales@holisticoverseas.com</p>
              <p>+91 81281 55486  | +91 84697 04880</p>
              <p>Mon - Sat: 10:00 - 18:00</p>
            </div>
          </div>
          <div className="space-y-6 lg:text-right">
            <h4 className="font-bold text-neutral-900">Legal</h4>
            <div className="space-y-2 opacity-60">
              <p>© 2025 Holistic Overseas Ltd.</p>
              <p>Privacy Policy / Terms</p>
              <p>Made for Global Citizens</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-neutral-200 pt-6">
          <div className="text-[10px] tracking-[1em] mb-4 md:mb-0 text-[rgba(55,205,250)]">HOLISTIC OVERSEAS CO.</div>
          <div className="text-[10px] text-[rgba(55,205,250)]">DESIGNED FOR THE BORDERLESS ERA</div>
        </div>

        <div className="mt-4 pt-4 border-t border-neutral-200 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-[rgba(55,205,250)] hover:text-neutral-900 transition-colors duration-500 cursor-default">
            Created By : RUDRAKSH INNOVATIONS
          </p>
        </div>
      </div>
    </footer>
  );
};
