import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, ArrowRight, Anchor, 
  Briefcase, Globe, Plane, Building2, Users, 
  Leaf, Factory, ShieldCheck, Mail, ChevronRight 
} from 'lucide-react';

/* AVALON CORPORATE WEBSITE
  Design Inspiration: Kearney.com (Clean, Serif headings, large imagery, professional)
  Content: Based on provided screenshots.
*/

// --- Components ---

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "px-6 py-3 font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 group";
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 border-2 border-slate-900",
    outline: "bg-transparent text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white",
    text: "bg-transparent text-slate-900 hover:text-red-700 p-0 underline-offset-4 hover:underline"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
      {variant !== 'text' && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};

const SectionHeading = ({ children, className = '' }) => (
  <h2 className={`text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-8 ${className}`}>
    {children}
  </h2>
);

const SectionText = ({ children, className = '' }) => (
  <p className={`text-lg text-slate-600 leading-relaxed mb-6 font-light ${className}`}>
    {children}
  </p>
);

const ContactCTA = ({ navigateToContact }) => (
  <div className="bg-slate-50 py-20 border-t border-slate-200">
    <div className="container mx-auto px-6 text-center max-w-4xl">
      <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Ready to move forward?</h3>
      <p className="text-xl text-slate-600 mb-8">
        To discuss a consulting engagement, trading requirement, or partnership opportunity, please contact us.
      </p>
      <div className="flex justify-center">
        <Button onClick={navigateToContact}>Get in Touch</Button>
      </div>
    </div>
  </div>
);

const Hero = ({ navigateTo }) => (
  <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    {/* Background Image Placeholder - Abstract Corporate/Global */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
        alt="Avalon Global Capability" 
        className="w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
    </div>

    <div className="relative z-10 container mx-auto px-6 pt-20">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
          Precision.<br />
          Performance.<br />
          Perspective.
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl font-light">
          A world of capability. Avalon combines strategic management consulting with precise global trading operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => navigateTo('consulting')}
            className="px-8 py-4 bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
          >
            Our Consulting <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => navigateTo('trading')}
            className="px-8 py-4 border-2 border-white text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            Global Trading <Globe size={20} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

// --- Page Components ---

const HomePage = ({ navigateTo }) => (
  <div className="animate-in fade-in duration-700">
    <Hero navigateTo={navigateTo} />
    
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-red-700 font-bold tracking-widest uppercase text-sm mb-2 block">Who We Are</span>
            <SectionHeading>Designed for impact on the ground and in the air.</SectionHeading>
          </div>
          <div>
            <SectionText>
              Avalon is a consulting and trading company specializing in management, aviation, and cross-border commerce.
            </SectionText>
            <SectionText>
              We help organizations design strategies, optimize operations, and execute complex projects with precision.
            </SectionText>
            <div className="mt-8">
              <Button variant="text" onClick={() => navigateTo('firm')}>Read more about The Firm</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Consulting Card */}
          <div className="bg-white p-12 shadow-sm hover:shadow-xl transition-shadow group cursor-pointer" onClick={() => navigateTo('consulting')}>
            <Briefcase size={48} className="text-slate-900 mb-6 group-hover:text-red-700 transition-colors" />
            <h3 className="text-3xl font-serif font-bold mb-4">Consulting Expertise</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We combine management consulting with aviation advisory to address strategic and operational challenges. From organizational transformation to aviation infrastructure like hangars and terminals.
            </p>
            <span className="text-slate-900 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
              Explore Consulting <ArrowRight size={18} />
            </span>
          </div>

          {/* Trading Card */}
          <div className="bg-white p-12 shadow-sm hover:shadow-xl transition-shadow group cursor-pointer" onClick={() => navigateTo('trading')}>
            <Anchor size={48} className="text-slate-900 mb-6 group-hover:text-red-700 transition-colors" />
            <h3 className="text-3xl font-serif font-bold mb-4">Global Trade & Commerce</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Managing international sourcing and distribution through established logistics networks. We specialize in tobacco products, metals, and coal with a focus on regulatory alignment and execution.
            </p>
            <span className="text-slate-900 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
              Explore Trading <ArrowRight size={18} />
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-serif font-bold mb-8">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-12 border-t border-slate-700 pt-12">
            <div>
              <h4 className="text-xl font-bold mb-4 text-slate-200">Analytical & Adaptive</h4>
              <p className="text-slate-400">
                We bring together strategic insight and technical capability to deliver outcomes that stand up to real-world conditions.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-slate-200">Execution Focused</h4>
              <p className="text-slate-400">
                Whether advising leadership teams or managing aviation projects, Avalon is built for environments where precision defines success.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-slate-200">Global Perspective</h4>
              <p className="text-slate-400">
                Cross-border commerce and management requires a nuanced understanding of regulatory and operational landscapes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ConsultingPage = ({ navigateTo }) => (
  <div className="animate-in slide-in-from-bottom-8 duration-700">
    <div className="bg-slate-100 py-20 px-6">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900">Consulting</h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl">
          Improving organizational performance, operational efficiency, and project delivery for government entities and private operators.
        </p>
      </div>
    </div>

    <div className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-20">
          
          {/* Management Consulting */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-red-700" size={32} />
              <h2 className="text-3xl font-serif font-bold">Management Consulting</h2>
            </div>
            <SectionText>
              Our management consulting practice supports organizations in defining strategy, optimizing operations, and leading transformation. We help clients align strategic priorities with execution realities—ensuring that performance, governance, and decision-making frameworks translate effectively into results.
            </SectionText>
            <div className="bg-slate-50 p-8 rounded-sm border-l-4 border-slate-900">
              <h4 className="font-bold text-lg mb-4">Core Areas:</h4>
              <ul className="grid sm:grid-cols-2 gap-4">
                {['Strategy & Corporate Planning', 'Operational Efficiency', 'Organizational Design', 'Process Optimization'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-700">
                    <div className="w-1.5 h-1.5 bg-red-700 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Aviation Consulting */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Plane className="text-red-700" size={32} />
              <h2 className="text-3xl font-serif font-bold">Aviation Consulting</h2>
            </div>
            <SectionText>
              Avalon’s aviation practice combines industry insight with technical program management. We advise on the planning, development, and delivery of aviation infrastructure — from hangars and maintenance domes to terminals and support facilities.
            </SectionText>
            <SectionText>
              Our team brings an understanding of both operational requirements and commercial outcomes, enabling projects that are efficient, compliant, and future-ready.
            </SectionText>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="border border-slate-200 p-6 hover:border-slate-400 transition-colors">
                <h4 className="font-bold text-lg mb-2">Infrastructure</h4>
                <p className="text-slate-600 text-sm">Airport & Facility Development including Domes, Hangars, and Terminals.</p>
              </div>
              <div className="border border-slate-200 p-6 hover:border-slate-400 transition-colors">
                <h4 className="font-bold text-lg mb-2">Project Management</h4>
                <p className="text-slate-600 text-sm">Aviation Project & Program Management aimed at delivery excellence.</p>
              </div>
              <div className="border border-slate-200 p-6 hover:border-slate-400 transition-colors">
                <h4 className="font-bold text-lg mb-2">ORAT</h4>
                <p className="text-slate-600 text-sm">Operational Readiness & Efficiency planning.</p>
              </div>
              <div className="border border-slate-200 p-6 hover:border-slate-400 transition-colors">
                <h4 className="font-bold text-lg mb-2">Advisory</h4>
                <p className="text-slate-600 text-sm">Safety, Compliance & Regulatory Advisory.</p>
              </div>
            </div>
          </section>

          {/* Approach */}
          <section>
             <h3 className="text-2xl font-serif font-bold mb-4">Our Approach</h3>
             <p className="text-slate-600 italic border-l-2 border-slate-300 pl-4 py-2">
               "We diagnose issues precisely, design tailored frameworks, and stay involved through delivery to ensure impact."
             </p>
          </section>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 bg-slate-900 text-white p-8">
            <h3 className="text-xl font-serif font-bold mb-4">Project Focus</h3>
            <p className="text-slate-300 mb-6 text-sm">
              From strategic boardrooms to aviation hangars, we bridge the gap between concept and completion.
            </p>
            <div className="space-y-4">
              <div className="h-40 bg-slate-800 w-full overflow-hidden relative group">
                 <img src="https://images.unsplash.com/photo-1542296332-2e44a996aa0a?auto=format&fit=crop&q=80&w=600" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity" alt="Aviation" />
                 <div className="absolute bottom-0 left-0 p-2 font-bold text-sm bg-black/50 w-full">Aviation Infrastructure</div>
              </div>
              <div className="h-40 bg-slate-800 w-full overflow-hidden relative group">
                 <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity" alt="Strategy" />
                 <div className="absolute bottom-0 left-0 p-2 font-bold text-sm bg-black/50 w-full">Corporate Strategy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- New Separate Product Pages ---

const TobaccoPage = ({ navigateTo }) => (
  <div className="animate-in slide-in-from-bottom-8 duration-700">
    <div className="bg-amber-50 py-20 px-6 border-b border-amber-100">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-4 text-amber-800 font-bold uppercase tracking-widest text-sm cursor-pointer" onClick={() => navigateTo('trading')}>
          <ArrowRight className="rotate-180" size={16} /> Back to Trading
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900">Tobacco Products</h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl">
          Complete range of cigarette products across multiple formats, blends, and packaging types.
        </p>
      </div>
    </div>

    <div className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <SectionText>
            Avalon supplies a comprehensive portfolio of tobacco products designed to meet diverse market preferences. We combine structured commercial processes with strong supplier relationships to ensure consistency and quality.
          </SectionText>
          <SectionText>
            Each product category is sourced and produced within strict quality parameters and in accordance with destination market regulations.
          </SectionText>
          
          <div className="mt-12 bg-white p-8 border border-slate-100 shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
              <Leaf className="text-amber-700" /> Key Specifications
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 pb-6 border-b border-slate-100 last:border-0">
                <div className="bg-amber-100 p-2 rounded text-amber-800 font-bold">01</div>
                <div>
                  <strong className="block text-slate-900 text-lg mb-1">Formats</strong>
                  <span className="text-slate-600">Nano, Slim, Super Slim, King Size, Regular</span>
                </div>
              </li>
              <li className="flex items-start gap-4 pb-6 border-b border-slate-100 last:border-0">
                <div className="bg-amber-100 p-2 rounded text-amber-800 font-bold">02</div>
                <div>
                  <strong className="block text-slate-900 text-lg mb-1">Filter Types</strong>
                  <span className="text-slate-600">Standard, Ventilated, Single Capsule, Dual Capsule</span>
                </div>
              </li>
              <li className="flex items-start gap-4 pb-6 border-b border-slate-100 last:border-0">
                <div className="bg-amber-100 p-2 rounded text-amber-800 font-bold">03</div>
                <div>
                  <strong className="block text-slate-900 text-lg mb-1">Packaging</strong>
                  <span className="text-slate-600">Hard/Soft packs, Beveled edges, Specialized finishes (Fan-edged designs)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-8">
           <div className="bg-slate-900 text-white p-10">
              <h3 className="text-xl font-bold mb-4">Customization & Compliance</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Specifications are customized to the buyer’s requirements, aligned with market standards, and confirmed at the time of order.
              </p>
              <div className="flex flex-col gap-3">
                 <div className="flex items-center gap-2 text-sm text-slate-300"><ShieldCheck size={16} /> Market-specific blends</div>
                 <div className="flex items-center gap-2 text-sm text-slate-300"><ShieldCheck size={16} /> Regulatory packaging alignment</div>
                 <div className="flex items-center gap-2 text-sm text-slate-300"><ShieldCheck size={16} /> Quality assurance testing</div>
              </div>
           </div>
           
           <div className="h-64 bg-slate-200 w-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1627807663249-c146e3794715?auto=format&fit=crop&q=80&w=1000" className="object-cover w-full h-full opacity-80" alt="Tobacco Fields" />
           </div>
        </div>
      </div>
    </div>
  </div>
);

const MetalsPage = ({ navigateTo }) => (
  <div className="animate-in slide-in-from-bottom-8 duration-700">
    <div className="bg-slate-200 py-20 px-6 border-b border-slate-300">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-4 text-slate-700 font-bold uppercase tracking-widest text-sm cursor-pointer" onClick={() => navigateTo('trading')}>
          <ArrowRight className="rotate-180" size={16} /> Back to Trading
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900">Metals & Coal</h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl">
          Sourcing industrial and energy materials with a focus on supply chain consistency.
        </p>
      </div>
    </div>

    <div className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <SectionText>
            We manage the sourcing and distribution of industrial metals and energy materials, serving manufacturing partners and industrial clients. Our network spans established manufacturing partners and logistics providers across multiple regions.
          </SectionText>
          
          <div className="mt-12 bg-white p-8 border border-slate-100 shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
              <Factory className="text-slate-700" /> Core Materials
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">Industrial Metals</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 text-center hover:bg-slate-100 transition-colors">
                    <span className="block font-bold text-slate-800">Copper</span>
                  </div>
                  <div className="p-4 bg-slate-50 text-center hover:bg-slate-100 transition-colors">
                    <span className="block font-bold text-slate-800">Steel</span>
                  </div>
                  <div className="p-4 bg-slate-50 text-center hover:bg-slate-100 transition-colors">
                    <span className="block font-bold text-slate-800">Aluminum</span>
                  </div>
                  <div className="p-4 bg-slate-50 text-center hover:bg-slate-100 transition-colors">
                    <span className="block font-bold text-slate-800">Nickel</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">Coal</h4>
                <p className="text-slate-600 mb-4">
                  Reliable supply of energy materials for industrial applications.
                </p>
                <div className="flex gap-4">
                   <span className="px-4 py-2 bg-slate-800 text-white text-sm font-bold rounded-full">Coking Coal</span>
                   <span className="px-4 py-2 bg-slate-800 text-white text-sm font-bold rounded-full">Steam Coal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
           <div className="bg-slate-900 text-white p-10">
              <h3 className="text-xl font-bold mb-4">Supply Chain Reliability</h3>
              <p className="text-slate-300 leading-relaxed">
                 We coordinate the full process — from specification and compliance documentation to shipment and delivery — ensuring consistency, visibility, and discretion throughout the transaction.
              </p>
           </div>
           
           <div className="h-80 bg-slate-800 w-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000" className="object-cover w-full h-full opacity-60" alt="Industrial Plant" />
           </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Updated Trading Page (Overview) ---

const TradingPage = ({ navigateTo }) => (
  <div className="animate-in slide-in-from-bottom-8 duration-700">
    <div className="bg-slate-100 py-20 px-6">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900">Trading</h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl">
          Precision, reliability, and control in the global movement of key commodities.
        </p>
      </div>
    </div>

    <div className="container mx-auto px-6 py-20">
      
      {/* Intro */}
      <section className="mb-20 max-w-4xl">
        <SectionText>
          Avalon operates a global trading business specializing in the movement of tobacco products, metals, and coal across key markets. Our work centers on precision—ensuring every engagement, from sourcing to delivery, meets the expectations of professional distributors and import partners.
        </SectionText>
      </section>

      {/* Product Category Cards */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        
        {/* Tobacco Card */}
        <div className="bg-white border border-slate-200 shadow-sm p-10 hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => navigateTo('tobacco')}>
          <div className="flex items-center justify-between mb-8">
             <Leaf className="text-amber-700" size={40} />
             <ArrowRight className="text-slate-300 group-hover:text-amber-700 transition-colors" size={24} />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4 group-hover:text-amber-700 transition-colors">Tobacco Products</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Supplying a complete range of cigarette products including Nano, Slim, and King Size formats with customized blends and packaging options.
          </p>
          <span className="font-bold text-slate-900 border-b-2 border-slate-900 pb-1 group-hover:text-amber-700 group-hover:border-amber-700 transition-colors">View Specifications</span>
        </div>

        {/* Metals Card */}
        <div className="bg-white border border-slate-200 shadow-sm p-10 hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => navigateTo('metals')}>
          <div className="flex items-center justify-between mb-8">
             <Factory className="text-slate-700" size={40} />
             <ArrowRight className="text-slate-300 group-hover:text-slate-900 transition-colors" size={24} />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4 group-hover:text-slate-700 transition-colors">Metals & Coal</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
             Sourcing industrial and energy materials including Copper, Steel, Aluminum, and Coal with a focus on supply chain consistency.
          </p>
          <span className="font-bold text-slate-900 border-b-2 border-slate-900 pb-1 group-hover:text-slate-700 group-hover:border-slate-700 transition-colors">View Materials</span>
        </div>

      </div>

      {/* Why Partners Work With Us */}
      <section className="bg-slate-900 text-white p-12 rounded-sm">
        <h2 className="text-3xl font-serif font-bold mb-12">Why Partners Work With Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <ShieldCheck className="mb-4 text-slate-300" size={32} />
            <h4 className="font-bold text-lg mb-2">Regulated Processes</h4>
            <p className="text-slate-400 text-sm">Every shipment managed within formal compliance frameworks.</p>
          </div>
          <div>
            <Briefcase className="mb-4 text-slate-300" size={32} />
            <h4 className="font-bold text-lg mb-2">Commercial Clarity</h4>
            <p className="text-slate-400 text-sm">Transparent terms, structured documentation, and defined timelines.</p>
          </div>
          <div>
            <Factory className="mb-4 text-slate-300" size={32} />
            <h4 className="font-bold text-lg mb-2">Technical Expertise</h4>
            <p className="text-slate-400 text-sm">Understanding of both manufacturing and market-side requirements.</p>
          </div>
          <div>
            <Users className="mb-4 text-slate-300" size={32} />
            <h4 className="font-bold text-lg mb-2">Long-term Orientation</h4>
            <p className="text-slate-400 text-sm">Partnerships built on continuity and trust, not single transactions.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

const FirmPage = ({ navigateTo }) => (
  <div className="animate-in slide-in-from-bottom-8 duration-700">
     <div className="relative py-32 bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2300" className="w-full h-full object-cover opacity-20" alt="Office" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">The Firm</h1>
          <p className="text-xl text-slate-300 mt-6 max-w-2xl">
            Built on the principles of precision, performance, and reliability.
          </p>
        </div>
     </div>

     <div className="container mx-auto px-6 py-24">
       <div className="max-w-4xl mx-auto">
         <SectionHeading>About Avalon</SectionHeading>
         <SectionText>
           Avalon is a consulting and trading company built on the principles of precision, performance, and reliability. We operate across management, aviation, and international trade — helping clients and partners design, manage, and deliver with confidence.
         </SectionText>
         <SectionText>
           Our work combines strategic insight, technical capability, and operational control across industries where accuracy matters most.
         </SectionText>

         <div className="my-16 border-t border-b border-slate-200 py-12">
           <h3 className="text-2xl font-serif font-bold mb-8 text-center">Our Values</h3>
           <div className="grid sm:grid-cols-2 gap-8">
             <div className="flex gap-4">
               <div className="w-12 h-12 bg-slate-100 flex items-center justify-center font-bold text-slate-900">01</div>
               <div>
                 <h4 className="font-bold text-lg">Precision</h4>
                 <p className="text-slate-600 text-sm">In thought, design, and execution.</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="w-12 h-12 bg-slate-100 flex items-center justify-center font-bold text-slate-900">02</div>
               <div>
                 <h4 className="font-bold text-lg">Reliability</h4>
                 <p className="text-slate-600 text-sm">In commitments, partnerships, and delivery.</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="w-12 h-12 bg-slate-100 flex items-center justify-center font-bold text-slate-900">03</div>
               <div>
                 <h4 className="font-bold text-lg">Integrity</h4>
                 <p className="text-slate-600 text-sm">In how we operate and represent our clients.</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="w-12 h-12 bg-slate-100 flex items-center justify-center font-bold text-slate-900">04</div>
               <div>
                 <h4 className="font-bold text-lg">Adaptability</h4>
                 <p className="text-slate-600 text-sm">In responding to new challenges and market dynamics.</p>
               </div>
             </div>
           </div>
         </div>

         <div className="bg-slate-50 p-10">
           <h3 className="text-2xl font-serif font-bold mb-4">Our Perspective</h3>
           <p className="text-slate-600 leading-relaxed">
             We believe effective organizations balance vision with structure. At Avalon, we translate complex ideas into executable plans, and plans into measurable outcomes. Whether guiding leadership decisions or coordinating global trade operations, our focus remains constant — clarity, integrity, and follow-through.
           </p>
         </div>
       </div>
     </div>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', type: 'General', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulating form submission
  };

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-white p-10 shadow-lg border-t-4 border-slate-900">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Contact Us</h1>
            <p className="text-slate-600">
              For enquiries or partnership opportunities, please complete the form below.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 text-green-800 p-8 text-center rounded">
              <h3 className="text-2xl font-serif font-bold mb-2">Thank you.</h3>
              <p>Your message has been received. Our team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full p-4 border border-slate-300 focus:border-slate-900 outline-none transition-colors bg-slate-50 focus:bg-white"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full p-4 border border-slate-300 focus:border-slate-900 outline-none transition-colors bg-slate-50 focus:bg-white"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Inquiry Type</label>
                <div className="relative">
                  <select 
                    className="w-full p-4 border border-slate-300 focus:border-slate-900 outline-none appearance-none bg-slate-50 focus:bg-white"
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    <option>General Inquiry</option>
                    <option>Consulting Services</option>
                    <option>Trading & Products</option>
                    <option>Careers</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Message</label>
                <textarea 
                  required
                  rows="5"
                  className="w-full p-4 border border-slate-300 focus:border-slate-900 outline-none transition-colors bg-slate-50 focus:bg-white resize-none"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 hover:bg-slate-800 transition-colors">
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 text-center text-slate-600 text-sm">
          <div>
            <Mail className="mx-auto mb-2 text-slate-900" size={24} />
            <p className="font-bold text-slate-900">Email Us</p>
            <p>contact@avalon-group.com</p>
          </div>
          <div>
            <Building2 className="mx-auto mb-2 text-slate-900" size={24} />
            <p className="font-bold text-slate-900">Headquarters</p>
            <p>London • Dubai • Singapore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Layout ---

const Navbar = ({ activePage, setActivePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tradingDropdownOpen, setTradingDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = `text-sm font-bold tracking-widest uppercase cursor-pointer hover:text-red-600 transition-colors ${
    isScrolled || activePage !== 'home' ? 'text-slate-900' : 'text-white'
  }`;

  const handleNavClick = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setTradingDropdownOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || activePage !== 'home' ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className={`text-2xl font-serif font-black tracking-tighter cursor-pointer ${
            isScrolled || activePage !== 'home' ? 'text-slate-900' : 'text-white'
          }`}
        >
          AVALON
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <span onClick={() => handleNavClick('home')} className={navLinkClass}>Home</span>
          <span onClick={() => handleNavClick('consulting')} className={navLinkClass}>Consulting</span>
          
          {/* Dropdown for Trading */}
          <div className="relative group">
            <span 
              className={`${navLinkClass} flex items-center gap-1`}
              onMouseEnter={() => setTradingDropdownOpen(true)}
              onClick={() => handleNavClick('trading')}
            >
              Trading <ChevronDown size={14} />
            </span>
            <div 
              className={`absolute top-full left-0 bg-white shadow-xl border-t-2 border-slate-900 w-48 py-2 mt-4 transform transition-all duration-200 origin-top-left ${
                tradingDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible'
              }`}
            >
              <div onClick={() => handleNavClick('tobacco')} className="block px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-700 cursor-pointer">
                Tobacco Products
              </div>
              <div onClick={() => handleNavClick('metals')} className="block px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-700 cursor-pointer">
                Metals & Coal
              </div>
            </div>
          </div>

          <span onClick={() => handleNavClick('firm')} className={navLinkClass}>The Firm</span>
          <span onClick={() => handleNavClick('contact')} className={navLinkClass}>Contact</span>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${isScrolled || activePage !== 'home' ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 flex flex-col">
          <span onClick={() => handleNavClick('home')} className="px-6 py-4 text-slate-900 font-bold border-b border-slate-100">Home</span>
          <span onClick={() => handleNavClick('consulting')} className="px-6 py-4 text-slate-900 font-bold border-b border-slate-100">Consulting</span>
          <span onClick={() => handleNavClick('trading')} className="px-6 py-4 text-slate-900 font-bold border-b border-slate-100">Trading Overview</span>
          <span onClick={() => handleNavClick('tobacco')} className="px-6 py-4 text-slate-600 pl-10 border-b border-slate-100 text-sm">Tobacco Products</span>
          <span onClick={() => handleNavClick('metals')} className="px-6 py-4 text-slate-600 pl-10 border-b border-slate-100 text-sm">Metals & Coal</span>
          <span onClick={() => handleNavClick('firm')} className="px-6 py-4 text-slate-900 font-bold border-b border-slate-100">The Firm</span>
          <span onClick={() => handleNavClick('contact')} className="px-6 py-4 text-red-700 font-bold">Contact Us</span>
        </div>
      )}
    </nav>
  );
};

const Footer = ({ navigateTo }) => (
  <footer className="bg-slate-950 text-slate-400 py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-serif font-black text-white mb-6">AVALON</h2>
          <p className="text-sm leading-relaxed mb-6">
            Precision. Performance. Perspective.<br/>
            Global consulting and trading operations.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Practices</h4>
          <ul className="space-y-2 text-sm">
            <li onClick={() => navigateTo('consulting')} className="hover:text-white cursor-pointer">Management Consulting</li>
            <li onClick={() => navigateTo('consulting')} className="hover:text-white cursor-pointer">Aviation Infrastructure</li>
            <li onClick={() => navigateTo('tobacco')} className="hover:text-white cursor-pointer">Tobacco Trading</li>
            <li onClick={() => navigateTo('metals')} className="hover:text-white cursor-pointer">Industrial Metals</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">The Firm</h4>
          <ul className="space-y-2 text-sm">
            <li onClick={() => navigateTo('firm')} className="hover:text-white cursor-pointer">About Us</li>
            <li onClick={() => navigateTo('firm')} className="hover:text-white cursor-pointer">Our Values</li>
            <li onClick={() => navigateTo('contact')} className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>London, UK</li>
            <li>Dubai, UAE</li>
            <li onClick={() => navigateTo('contact')} className="text-white font-bold mt-4 cursor-pointer hover:underline">Get in Touch &rarr;</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; 2025 Avalon Group. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="cursor-pointer hover:text-white">Privacy Policy</span>
          <span className="cursor-pointer hover:text-white">Terms of Use</span>
          <span className="cursor-pointer hover:text-white">Compliance</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <HomePage navigateTo={setActivePage} />;
      case 'consulting': return <ConsultingPage navigateTo={setActivePage} />;
      case 'trading': return <TradingPage navigateTo={setActivePage} />;
      case 'tobacco': return <TobaccoPage navigateTo={setActivePage} />;
      case 'metals': return <MetalsPage navigateTo={setActivePage} />;
      case 'firm': return <FirmPage navigateTo={setActivePage} />;
      case 'contact': return <ContactPage />;
      default: return <HomePage navigateTo={setActivePage} />;
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      {activePage !== 'contact' && <ContactCTA navigateToContact={() => { setActivePage('contact'); window.scrollTo(0,0); }} />}
      
      <Footer navigateTo={(page) => { setActivePage(page); window.scrollTo(0,0); }} />
    </div>
  );
}
   