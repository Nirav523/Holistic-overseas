import useMetadata from '../hooks/useMetadata';
import React from 'react';

const GalleryItem: React.FC<{ src: string; location: string; name: string; uni: string }> = ({ src, location, name, uni }) => (
  <div className="space-y-4 group">
    <div className="aspect-[3/4] overflow-hidden transition-all duration-700 bg-neutral-100">
      <img src={src} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
    </div>
    <div className="pt-2 border-t border-neutral-200">
      <div className="flex justify-between items-center mb-1">
        <div className="text-[10px] uppercase font-bold text-[rgba(55,205,250)] tracking-widest">{location}</div>
        <div className="text-[9px] uppercase font-bold text-neutral-400">Class of '24</div>
      </div>
      <div className="text-lg font-display uppercase tracking-tight text-neutral-900 leading-none">{name}</div>
      <div className="text-[10px] uppercase font-light text-neutral-500 mt-1">{uni}</div>
    </div>
  </div>
);

export const Gallery: React.FC = () => {
  useMetadata(
    "Agri Product Gallery | High-Quality Export Catalog", 
    "Browse our collection of premium Indian agricultural exports. See our high-quality sourcing and packaging for spices, grains, and pulses ready for global shipment."
  );

  return (
    <section className="w-full py-16 bg-white text-neutral-900 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h3 className="text-8xl font-display uppercase leading-[0.8]">Global <br /> Community</h3>
          <p className="max-w-xs text-xs uppercase text-neutral-600 font-bold leading-relaxed border-l-2 border-[rgba(55,205,250)] pl-4">
            Our alumni are currently thriving in Fortune 500 companies and leading research labs across the globe.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12">
          <GalleryItem 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400" 
            location="London, UK" 
            name="Ishaan Malhotra" 
            uni="LSE Economics"
          />
          <GalleryItem 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
            location="Vancouver, CA" 
            name="David Wu" 
            uni="UBC Applied Science"
          />
          <GalleryItem 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" 
            location="Sydney, AU" 
            name="Ananya Rao" 
            uni="Uni of Sydney Architecture"
          />
          <GalleryItem 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" 
            location="New York, US" 
            name="James K. Miller" 
            uni="Columbia Business School"
          />
          <GalleryItem 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" 
            location="Munich, DE" 
            name="Karina Schulz" 
            uni="TUM Automotive Eng."
          />
          
          <GalleryItem 
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400" 
            location="Paris, FR" 
            name="Marie LeClerc" 
            uni="HEC Paris Management"
          />
          <GalleryItem 
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" 
            location="Dublin, IE" 
            name="Cillian O'Brien" 
            uni="Trinity College Dublin"
          />
          <GalleryItem 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" 
            location="Singapore" 
            name="Li Wei" 
            uni="NUS Data Science"
          />
          <GalleryItem 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" 
            location="Chicago, US" 
            name="Samuel Peters" 
            uni="UChicago Law"
          />
          <GalleryItem 
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400" 
            location="Amsterdam, NL" 
            name="Sophie V.D." 
            uni="UvA Media Studies"
          />
        </div>
      </div>
    </section>
  );
};
