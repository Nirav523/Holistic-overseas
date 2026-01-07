import useMetadata from '../hooks/useMetadata';
import React, { useEffect, useRef } from 'react';

const CertificateCard: React.FC<{ icon: string; title: string; subtitle: string }> = ({ icon, title, subtitle }) => (
  <div className="relative w-60 h-80 bg-white border border-white/20 p-6 flex flex-col items-center justify-between hover:-translate-y-2 transition-transform duration-500 group hover:shadow-2xl cursor-default">
    <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Decorative corners */}
    <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-neutral-200 group-hover:border-[rgba(55,205,250)] transition-colors duration-500"></div>
    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-neutral-200 group-hover:border-[rgba(55,205,250)] transition-colors duration-500"></div>
    <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-neutral-200 group-hover:border-[rgba(55,205,250)] transition-colors duration-500"></div>
    <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-neutral-200 group-hover:border-[rgba(55,205,250)] transition-colors duration-500"></div>

    <div className="mt-6 text-6xl text-[rgba(55,205,250)] drop-shadow-sm group-hover:scale-110 transition-transform duration-500">{icon}</div>
    
    <div className="text-center space-y-3 relative z-10 w-full">
        <div className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-medium">Certified</div>
        <div className="font-display text-2xl uppercase leading-[0.9] tracking-tight text-neutral-900">{title}</div>
        <div className="h-px w-12 bg-neutral-200 mx-auto group-hover:w-full group-hover:bg-[rgba(55,205,250)] transition-all duration-700"></div>
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 leading-relaxed">{subtitle}</div>
    </div>

    <div className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest group-hover:text-[rgba(55,205,250)] transition-colors">
        VERIFIED STATUS
    </div>
  </div>
);

export const Philosophy: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useMetadata(
    "Our Export Philosophy | Commitment to Quality", 
    "At Holistic Overseas, our philosophy is built on transparency and excellence. We ensure every agricultural product exported meets international safety and quality standards."
  );

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return;
      
      const L = (window as any).L;
      if (!L) return;

      // Inject custom styles for markers
      const style = document.createElement('style');
      style.innerHTML = `.leaflet-div-icon { background: transparent !important; border: none !important; }`;
      document.head.appendChild(style);

      const map = L.map(mapRef.current, {
        center: [25, 60],
        zoom: 3,
        zoomControl: false,
        attributionControl: false
      });
      
      mapInstanceRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
      }).addTo(map);

      const locations = [
        { name: "India", coords: [20.5937, 78.9629] },
        { name: "China", coords: [35.8617, 104.1954] },
        { name: "UAE", coords: [23.4241, 53.8478] },
        { name: "Saudi Arabia", coords: [23.8859, 45.0792] },
        { name: "Africa", coords: [9.0820, 8.6753] },
        { name: "Tanzania", coords: [-6.3690, 34.8888] },
        // { name: "Dar es Salaam", coords: [-6.7924, 39.2083] }
      ];

      const customIcon = L.divIcon({
        className: 'leaflet-div-icon',
        html: `<div class="relative flex items-center justify-center w-4 h-4">
                 <div class="w-4 h-4 bg-[rgba(55,205,250)] rounded-full animate-ping absolute opacity-75"></div>
                 <div class="w-3 h-3 bg-[rgba(55,205,250)] rounded-full relative border-2 border-white shadow-lg"></div>
               </div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8]
      });

      locations.forEach((loc: any) => {
        L.marker(loc.coords, { icon: customIcon }).addTo(map)
         .bindTooltip(loc.name, { permanent: true, direction: 'bottom', className: '!bg-white/90 !border !border-neutral-200 !px-2 !py-1 !rounded !shadow-lg !text-[10px] !font-bold !uppercase !tracking-widest !text-neutral-600 !font-sans' });
      });
    };

    if (!(window as any).L) {
      const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'; document.head.appendChild(link);
      const script = document.createElement('script'); script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'; script.async = true; script.onload = initMap; document.body.appendChild(script);
    } else { initMap(); }

    return () => { if (mapInstanceRef.current) { mapInstanceRef.current.remove(); mapInstanceRef.current = null; } };
  }, []);

  return (
    <>
      <section className="w-full bg-[rgba(55,205,250)] text-white py-20 px-8 md:px-16 flex flex-col items-center">
        <div className="max-w-6xl w-full text-center">
          <h2 className="text-7xl md:text-[10rem] font-display uppercase leading-[0.8] mb-12">
            OUR CERTIFICATES
          </h2>
          <div className="w-full flex flex-nowrap justify-start lg:justify-center gap-4 py-12 px-4 overflow-x-auto">
              <CertificateCard icon="🌏" title="FIEO Member" subtitle="Federation of Indian Export Organisations" />
              <CertificateCard icon="📜" title="DGFT Certified" subtitle="Directorate General of Foreign Trade" />
              <CertificateCard icon="★" title="ISO 9001" subtitle="International Quality Certification" />
              <CertificateCard icon="🌾" title="APEDA Member" subtitle="Agri Export Development Authority" />
              <CertificateCard icon="🥗" title="FSSAI" subtitle="Food Safety Certificate" />
          </div>
          <div className="max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl font-light uppercase tracking-tight opacity-90 leading-tight">
                  Our operations adhere to the highest international standards. 
                  We are fully accredited by global trade authorities, ensuring your cargo moves with verified safety, compliance, and speed across every border.
              </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white text-neutral-900 py-20 px-8 md:px-16 flex flex-col items-center">
        <div className="max-w-7xl w-full text-center">
          <h2 className="text-7xl md:text-[10rem] font-display uppercase leading-[0.8] mb-12">
            GLOBAL   <span className="text-[rgba(55,205,250)]">MAP</span>
          </h2>
          <div 
            id="world-map" 
            className="w-full h-96 rounded-2xl shadow-lg mb-12 relative overflow-hidden group"
            ref={mapRef}
            data-aos="zoom-in"
          >

             {/* Tech Overlays */}
             <div className="absolute inset-0 pointer-events-none z-[1000]">
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md border border-neutral-200 px-4 py-2 shadow-lg rounded-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">Live Global Tracking</span>
                    </div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md border border-neutral-200 px-6 py-4 shadow-lg rounded-sm space-y-2 hidden md:block">
                    <div className="flex justify-between items-center gap-8">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase">Active Vessels</span>
                        <span className="text-sm font-bold font-mono">142</span>
                    </div>
                    <div className="w-full h-px bg-neutral-200"></div>
                    <div className="flex justify-between items-center gap-8">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase">Ports Connected</span>
                        <span className="text-sm font-bold font-mono">48</span>
                    </div>
                </div>
             </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-white rounded-xl shadow-md py-8 hover:shadow-xl transition transform hover:-translate-y-2 duration-300">
              <div className="text-5xl font-display text-[rgba(55,205,250)] mb-2">50+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">Global Partners</div>
            </div>
            <div className="bg-white rounded-xl shadow-md py-8 hover:shadow-xl transition transform hover:-translate-y-2 duration-300">
              <div className="text-5xl font-display text-[rgba(55,205,250)] mb-2">120+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">Cities Served</div>
            </div>
            <div className="bg-white rounded-xl shadow-md py-8 hover:shadow-xl transition transform hover:-translate-y-2 duration-300">
              <div className="text-5xl font-display text-[rgba(55,205,250)] mb-2">15k</div>
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">Metric Tons Moved</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
