import React from 'react';

const Step: React.FC<{ 
  num: string; 
  title: string; 
  desc: string; 
  metrics: string[];
  isEven: boolean;
  img: string;
}> = ({ num, title, desc, metrics, isEven, img }) => (
  <div className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 py-4 md:py-6 border-b border-neutral-200 relative group`}>
    {/* Blueprint Annotation Line */}
    <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-px h-full bg-neutral-200 hidden md:block overflow-hidden`}>
      <div className="w-full h-20 bg-[rgba(55,205,250)] animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>

    {/* Technical Visual Side */}
    <div className="md:w-1/2 flex flex-col justify-center relative">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-[10vw] font-display leading-none text-[rgba(55,205,250)] transition-colors duration-700">
          {num}
        </span>
      </div>
      
      {/* Decorative Grid Box */}
      <div className="w-full aspect-[21/9] bg-neutral-50 border border-dashed border-neutral-200 p-1 relative overflow-hidden group-hover:border-[rgba(55,205,250)] transition-colors">
        <div className="absolute inset-0 z-10 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="relative h-full w-full overflow-hidden">
          <img src={img} alt={title} className="w-full h-full object-cover transition-all duration-700" />
        </div>
      </div>
    </div>

    {/* Content Side */}
    <div className="md:w-1/2 flex flex-col justify-center space-y-4">
      <div className="space-y-4">
        <h4 className="text-5xl md:text-6xl font-display uppercase tracking-tighter leading-none">
          {title}
        </h4>
        <div className="h-1 w-24 bg-[rgba(55,205,250)]"></div>
      </div>
      
      <p className="text-xl text-neutral-600 leading-tight font-light max-w-xl">
        {desc}
      </p>

      <div className="grid grid-cols-2 gap-y-6 pt-6 border-t border-neutral-200">
        {metrics.map((m, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.3em] font-black text-neutral-400 mb-1">{m}</span>
            <div className="flex items-center gap-2">
              <div className="h-0.5 flex-1 bg-neutral-200">
                <div className="h-full bg-[rgba(55,205,250)]" style={{ width: `${60 + Math.random() * 35}%` }}></div>
              </div>
              <span className="text-[10px] font-mono font-bold text-neutral-500">{(80 + Math.random() * 19).toFixed(1)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Process: React.FC = () => {
  return (
    <section className="w-full py-6 md:py-8 px-8 md:px-16 bg-white text-neutral-900 relative overflow-hidden">
      {/* Background Technical Markers */}
      {/* <div className="absolute top-6 left-10 text-[10px] font-mono text-neutral-400 uppercase tracking-widest hidden lg:block">
        [ X: 12.091 / Y: 77.213 ] / SCALE: 1:500
      </div> */}
      {/* <div className="absolute bottom-6 right-10 text-[10px] font-mono text-neutral-400 uppercase tracking-widest hidden lg:block">
        SYSTEM_ID: HO-CORP-INTEL-2025
      </div> */}

      <div className="max-w-7xl mx-auto">
        <div className="mb-4 md:mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              {/* <div className="w-10 h-10 border-2 border-[rgba(55,205,250)] flex items-center justify-center">
                 <div className="w-5 h-5 border border-[rgba(55,205,250)] rotate-45"></div>
              </div> */}
              {/* <span className="text-xs font-bold text-[rgba(55,205,250)] uppercase tracking-[0.4em]">Proprietary OS V.3.1</span> */}
            </div>
            <h2 className="text-[12vw] font-display uppercase leading-[0.75] tracking-tighter">
              TRADE <br /><span className="text-[rgba(55,205,250)]">BLUEPRINT</span>
            </h2>
          </div>
          
          <div className="max-w-sm text-sm uppercase leading-relaxed text-neutral-600 border-l-2 border-neutral-200 pl-8 py-2 font-medium">
            Moving <span className="text-[rgba(55,205,250)]">global capital</span> requires more than logistics. It requires an architectural framework that eliminates friction and maximizes transactional velocity.
          </div>
        </div>

        <div className="flex flex-col border-t border-neutral-200">
          <Step 
            num="01" 
            title="Strategic Sourcing" 
            desc="Exhaustive manufacturer vetting through on-site audits and quality control protocols at origin. We secure materials where excellence meets scale." 
            metrics={["Supplier Vetting", "Quality Audit"]}
            isEven={false}
            img="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
          />
          <Step 
            num="02" 
            title="Compliance Audit" 
            desc="Regulatory mapping of tariffs, HS codes, and safety standards to pre-clear all shipments before they reach international waters." 
            metrics={["Tariff Mapping", "Safety Standards"]}
            isEven={true}
            img="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
          />
          <Step 
            num="03" 
            title="Logistics Orchestration" 
            desc="Multimodal routing optimization. We combine sea, air, and rail to balance speed and cost with real-time IoT tracking for every container." 
            metrics={["Route Optimization", "IoT Tracking"]}
            isEven={false}
            img="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=800"
          />
          <Step 
            num="04" 
            title="Customs Clearance" 
            desc="Digital documentation and brokerage services. We handle duties and inspections with local authorities via direct API integrations." 
            metrics={["Paperless Brokerage", "Duty Management"]}
            isEven={true}
            img="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
          />
          <Step 
            num="05" 
            title="Market Distribution" 
            desc="Last-mile precision. From regional port warehousing to your final distribution center, ensuring your inventory is exactly where it needs to be." 
            metrics={["Warehousing", "Inventory Flow"]}
            isEven={false}
            img="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
          />
        </div>

        {/* Closing Technical Summary */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center py-8 border-t border-dashed border-neutral-200 opacity-50" />
      </div>
    </section>
  );
};
