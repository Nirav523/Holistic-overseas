
import React from 'react';

const ServiceCard: React.FC<{ title: string; desc: string; num: string; img: string }> = ({ title, desc, num, img }) => (
  <div className="border border-neutral-200 p-6 flex flex-col gap-4 bg-white hover:bg-neutral-50 transition-colors group">
    <div className="flex justify-between items-start">
      <span className="font-display text-2xl text-[rgba(55,205,250)] opacity-50 group-hover:opacity-100">{num}</span>
      <div className="w-12 h-[1px] bg-neutral-200 mt-4"></div>
    </div>
    <div className="aspect-square overflow-hidden bg-neutral-50 transition-all border border-neutral-100">
       <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    </div>
    <h3 className="text-2xl font-display uppercase tracking-tight">{title}</h3>
    <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed">{desc}</p>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="w-full py-16 bg-white text-neutral-900 px-8 md:px-16">
      <div className="flex flex-col md:flex-row gap-12 mb-10">
        <h2 className="text-9xl font-display uppercase text-neutral-900 leading-[0.8] basis-1/2">
          TRADE <br /> <span className="text-[rgba(55,205,250)]">POWERED</span>
        </h2>
        <div className="basis-1/2 space-y-6 pt-4">
          <p className="text-lg text-neutral-600 max-w-md">
            Our holistic framework for international trade ensures every shipment is optimized for compliance, cost, and speed through advanced infrastructure.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ServiceCard 
          num="01"
          title="Premium Onions"
          desc="Sourcing the finest red and white onions from certified farms, ensuring optimal shelf life and quality for global distribution."
          img="/images/onion.jpeg"
        />
        <ServiceCard 
          num="02"
          title="Finest Rice"
          desc="We export premium Basmati and non-Basmati rice, ensuring long grains, rich aroma, and superior quality for global markets."
          img="/images/rice.jpg"
        />
        <ServiceCard 
          num="03"
          title="Cumin Seeds"
          desc="Sourcing premium quality cumin seeds, known for their distinct aroma and flavor, perfect for culinary uses worldwide."
          img="/images/cuminseeds.jpg"
        />
        <ServiceCard 
          num="04"
          title="All Agriculture Products"
          desc="We export a wide range of agricultural products including grains, pulses, and fresh produce, sourced directly from top-tier farms."
          img="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
        />
      </div>
    </section>
  );
};
