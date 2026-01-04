  
import React from 'react';

const DestinationCard: React.FC<{ country: string; highlight: string; img: string }> = ({ country, highlight, img }) => (
  <div className="relative group overflow-hidden border border-neutral-200 aspect-[4/5] bg-white">
    <div className="absolute inset-0 group-hover:scale-105 transition-all duration-700">
      <img src={img} alt={country} className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
    <div className="absolute bottom-0 left-0 p-6 w-full text-white">
      <h4 className="text-4xl font-display uppercase leading-none mb-2">{country}</h4>
      <p className="text-[10px] uppercase tracking-widest font-bold text-[rgba(55,205,250)]">{highlight}</p>
    </div>
  </div>
);

export const Destinations: React.FC = () => {
  return (
    <section className="w-full pt-6 pb-16 px-8 md:px-16 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-8">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[rgba(55,205,250)] uppercase tracking-widest">Trade Corridors</span>
            <h2 className="text-7xl font-display uppercase leading-[0.8]">Strategic <br /> Market Hubs</h2>
          </div>
          <p className="max-w-md text-neutral-600 uppercase text-sm leading-relaxed">
            We operate through the world's most vital maritime and aerial gates, ensuring your goods reach major economic zones in record time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <DestinationCard 
            country="Dubai" 
            highlight="Global Business Hub" 
            img="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800" 
          />
          <DestinationCard 
            country="Singapore" 
            highlight="Tuas Mega Port - Asia's Command Center" 
            img="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800" 
          />
          <DestinationCard 
            country="UAE" 
            highlight="Jebel Ali Port - Middle East Distribution" 
            img="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800" 
          />
          <DestinationCard 
            country="India" 
            highlight="JNPT Mumbai - Emerging Global Hub" 
            img="https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=800" 
          />
        </div>
      </div>
    </section>
  );
};
