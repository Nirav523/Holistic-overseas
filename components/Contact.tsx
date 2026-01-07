import useMetadata from '../hooks/useMetadata';
import React from 'react';

export const Contact: React.FC = () => {
  useMetadata(
    "Contact Us | Export Inquiries & Quotes", 
    "Connect with Holistic Overseas for premium agricultural export inquiries. Request a quote for bulk orders of spices, grains, and produce with worldwide shipping."
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await fetch("https://formsubmit.co/ajax/sales@holisticoverseas.com", {
        method: 'POST',
        body: formData,
      });
    } catch (error) {
      console.error(error);
    } finally {
      // By setting the href to just the pathname, we remove any hash (e.g., #contact)
      // from the URL. This forces the browser to reload the page at the very top.
      window.location.href = window.location.pathname + window.location.search;
    }
  };

  return (
    <section id="contact" className="w-full py-12 px-8 md:px-16 bg-white text-neutral-900 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[rgba(55,205,250)] text-xs font-bold uppercase tracking-[0.5em]">Transmission Channel</span>
              <h2 className="text-7xl md:text-8xl font-display uppercase leading-none tracking-tighter">
                REQUEST <br /> INTEL
              </h2>
            </div>
            
            <p className="text-neutral-600 text-lg font-light leading-relaxed max-w-md">
              Our global trade desk is active 24/7. Submit your logistics requirements or sourcing inquiries below for immediate tactical analysis.
            </p>

            <div className="space-y-6 pt-8 border-t border-neutral-200">
              <div className="flex items-center gap-6">
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Global HQ</div>
                <div className="text-sm uppercase tracking-widest">Ahmedabad // IN</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Direct Line</div>
                <div className="text-sm uppercase tracking-widest">+91 81282 55486 | +91 84697 04880</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/50 backdrop-blur-xl border border-neutral-200 p-10 space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-neutral-500 tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full bg-transparent border-b border-neutral-300 py-2 outline-none focus:border-[rgba(55,205,250)] transition-colors text-sm uppercase tracking-widest" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-neutral-500 tracking-widest">Company</label>
                <input 
                  type="text" 
                  name="company"
                  className="w-full bg-transparent border-b border-neutral-300 py-2 outline-none focus:border-[rgba(55,205,250)] transition-colors text-sm uppercase tracking-widest" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black text-neutral-500 tracking-widest">Email Address</label>
              <input 
                type="email" 
                name="email"
                className="w-full bg-transparent border-b border-neutral-300 py-2 outline-none focus:border-[rgba(55,205,250)] transition-colors text-sm uppercase tracking-widest" 
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black text-neutral-500 tracking-widest">Operational Requirement</label>
              <textarea 
                name="requirement"
                rows={4} 
                className="w-full bg-transparent border border-neutral-300 p-4 outline-none focus:border-[rgba(55,205,250)] transition-colors text-sm uppercase tracking-widest resize-none"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-[rgba(55,205,250)] py-4 font-black uppercase tracking-[0.3em] text-sm hover:bg-white hover:text-[rgba(55,205,250)] transition-all">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
  