import useMetadata from '../hooks/useMetadata';
import React, { useState } from 'react';

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left focus:outline-none group"
      >
        <h4 className="text-xl md:text-2xl font-display uppercase tracking-tight group-hover:text-[rgba(55,205,250)] transition-colors">
          {question}
        </h4>
        <span className={`text-3xl transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}>
        <p className="text-neutral-600 max-w-2xl leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const Faq: React.FC = () => {
  useMetadata(
    "Export FAQs | Common Questions on Agri Trade", 
    "Find answers to common questions about agricultural export procedures, quality certifications, minimum order quantities (MOQ), and shipping timelines."
  );

  return (
    <section className="w-full py-16 px-8 md:px-16 bg-white text-neutral-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 space-y-4">
          <span className="text-xs font-bold text-[rgba(55,205,250)] uppercase tracking-widest">Trade Advisory</span>
          <h2 className="text-6xl font-display uppercase leading-none">Commerce <br /> Intelligence</h2>
        </div>
        
        <div className="flex flex-col">
          <FaqItem 
            question="What are your primary Incoterms for shipping?" 
            answer="We primarily operate on FOB (Free On Board) and CIF (Cost, Insurance, and Freight), but we can accommodate EXW or DDP based on client requirements and destination infrastructure." 
          />
          <FaqItem 
            question="How do you ensure supplier reliability?" 
            answer="Every supplier in our network undergoes a 12-point audit, covering financial stability, production capacity, quality control systems, and ethical labor certifications." 
          />
          <FaqItem 
            question="What is the minimum order quantity (MOQ)?" 
            answer="MOQs vary significantly between commodity types. For electronics, it may be 500 units, whereas for bulk textiles or agricultural products, we measure by the container load (FCL)." 
          />
          <FaqItem 
            question="Do you handle insurance for high-value cargo?" 
            answer="Yes, we provide comprehensive marine cargo insurance that covers door-to-door transit risks, ensuring your investment is protected against unforeseen maritime events." 
          />
          <FaqItem 
            question="How do you handle currency fluctuations in trade finance?" 
            answer="We offer hedging strategies and fixed-rate contracts for long-term supply agreements to mitigate the impact of volatile exchange rates on your margins." 
          />
        </div>
      </div>
    </section>
  );
};
