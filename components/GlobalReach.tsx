
import React from 'react';

export const GlobalReach: React.FC = () => {
  return (
    <section className="w-full bg-white text-neutral-900 py-10 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl font-display text-[rgba(55,205,250)] uppercase">
            Fueling Global Markets
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            From our strategic hubs, we manage a supply chain spanning 40+ countries. Our network of verified suppliers and logistics partners ensures that your cargo arrives safely, on time, and within budget.
          </p>
          <div className="grid grid-cols-2 gap-4 border-t border-neutral-200 pt-8">
            <div>
              <div className="text-xs uppercase text-neutral-500">TEU Annual Volume</div>
              <div className="text-4xl font-display">15,000+</div>
            </div>
            <div>
              <div className="text-xs uppercase text-neutral-500">Verified Suppliers</div>
              <div className="text-4xl font-display">2,500+</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=800" 
            alt="Logistics Port Containers" 
            className="w-full h-auto"
          />
          <div className="absolute bottom-4 right-4 bg-[rgba(55,205,250)] text-white px-4 py-2 text-xs font-bold uppercase">
            Trading Desk - HQ
          </div>
        </div>
      </div>
    </section>
  );
};
