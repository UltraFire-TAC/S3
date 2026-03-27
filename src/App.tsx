/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Zap, 
  Shield, 
  Battery, 
  Maximize, 
  ChevronRight, 
  Target, 
  Layers, 
  Cpu,
  Menu,
  X,
  ShoppingCart,
  ExternalLink
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-tactical-accent rounded-sm flex items-center justify-center">
            <Zap className="text-forest-950 w-5 h-5 fill-current" />
          </div>
          <span className="font-mono font-bold tracking-tighter text-xl uppercase italic">UltraFire <span className="text-tactical-accent">S3</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-80">
          <a href="#features" className="hover:text-tactical-accent transition-colors">Features</a>
          <a href="#specs" className="hover:text-tactical-accent transition-colors">Specs</a>
          <a href="#beam" className="hover:text-tactical-accent transition-colors">Beam Test</a>
        </div>

        <button className="bg-tactical-accent text-forest-950 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-tighter hover:scale-105 transition-transform flex items-center gap-2">
          Buy Now <ShoppingCart size={16} />
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden tactical-grid">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tactical-green/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tactical-accent/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 border border-tactical-accent/30 text-tactical-accent text-[10px] font-mono uppercase tracking-[0.3em] mb-6 rounded-sm">
            EDC Tactical Series
          </span>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 italic uppercase">
            ULTRAFIRE <span className="text-tactical-accent glow-text">S3</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-white/60 font-light leading-relaxed mb-10">
            Precision engineered for the dark. 1000 Lumens of raw power packed into a pocket-sized aircraft-grade aluminum chassis.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-forest-950 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-tactical-accent transition-colors">
              Explore Features
            </button>
            <button className="border border-white/20 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">
              Watch Video
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Product Image Placeholder */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute bottom-[-10%] md:bottom-[-20%] left-1/2 -translate-x-1/2 w-full max-w-4xl pointer-events-none z-20"
      >
        <img 
          src="https://picsum.photos/seed/flashlight/1200/800" 
          alt="UltraFire S3" 
          className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(74,222,128,0.2)]"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="glass-panel p-8 rounded-2xl group hover:border-tactical-accent/40 transition-all"
  >
    <div className="w-12 h-12 bg-tactical-green/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-tactical-accent group-hover:text-forest-950 transition-colors">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3 uppercase tracking-tight italic">{title}</h3>
    <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="py-32 px-6 bg-forest-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold italic uppercase tracking-tighter mb-6">
              Built for the <span className="text-tactical-accent">Uncompromising</span>
            </h2>
            <p className="text-white/60 text-lg">
              The S3 isn't just a flashlight; it's a tool of survival. Every component is tested to military standards.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-8xl font-black text-white/5 opacity-10 italic">FEATURES</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Zap} 
            title="1000 Lumens" 
            desc="Blinding brightness with a throw distance of up to 200 meters." 
            delay={0.1}
          />
          <FeatureCard 
            icon={Shield} 
            title="IPX8 Waterproof" 
            desc="Submersible up to 2 meters for 30 minutes. Rain is never an issue." 
            delay={0.2}
          />
          <FeatureCard 
            icon={Battery} 
            title="50h Runtime" 
            desc="Optimized power management for extended missions on a single charge." 
            delay={0.3}
          />
          <FeatureCard 
            icon={Maximize} 
            title="Compact EDC" 
            desc="Only 115mm long. Fits perfectly in your pocket or tactical vest." 
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

const BeamPreview = () => {
  const [intensity, setIntensity] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="beam" className="py-32 px-6 bg-forest-950 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-tactical-accent font-mono text-xs uppercase tracking-[0.4em] mb-4 block">Interactive Demo</span>
          <h2 className="text-4xl md:text-6xl font-bold italic uppercase tracking-tighter mb-8">
            Experience the <span className="text-tactical-accent">Beam</span>
          </h2>
          <p className="text-white/60 mb-12 leading-relaxed">
            Adjust the slider to simulate the S3's variable output modes. From moonlight mode for reading maps to turbo mode for search and rescue.
          </p>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-mono uppercase tracking-widest opacity-60">
                <span>Output Intensity</span>
                <span>{intensity}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={intensity} 
                onChange={(e) => setIntensity(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-tactical-accent"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Low', val: 10 },
                { label: 'Med', val: 50 },
                { label: 'Turbo', val: 100 }
              ].map((m) => (
                <button 
                  key={m.label}
                  onClick={() => setIntensity(m.val)}
                  className={`py-3 rounded-lg border text-[10px] uppercase font-bold tracking-widest transition-all ${intensity === m.val ? 'bg-tactical-accent border-tactical-accent text-forest-950' : 'border-white/10 hover:border-white/30'}`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div 
          className="relative aspect-square bg-black rounded-3xl overflow-hidden border border-white/5 cursor-crosshair"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
             {/* Simulated Beam */}
             <motion.div 
               animate={{ 
                 scale: 0.5 + (intensity / 100),
                 opacity: (intensity / 100) * 0.8,
                 filter: `blur(${40 - (intensity / 5)}px)`
               }}
               className="w-64 h-64 bg-white rounded-full"
             />
             <motion.div 
               animate={{ 
                 scale: 0.2 + (intensity / 200),
                 opacity: (intensity / 100)
               }}
               className="absolute w-32 h-32 bg-white rounded-full blur-xl"
             />
          </div>
          
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div className="font-mono text-[10px] opacity-40 uppercase">
              Simulation Engine v2.4<br/>
              Real-time Raytracing
            </div>
            <div className="text-tactical-accent animate-pulse">
              <Target size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Specs = () => {
  const specs = [
    { label: 'LED Type', value: 'CREE XM-L2 U2' },
    { label: 'Max Output', value: '1000 Lumens' },
    { label: 'Battery', value: '1x 18650 or 2x CR123A' },
    { label: 'Material', value: 'Aero-grade Aluminum' },
    { label: 'Impact Resistance', value: '1.5 Meters' },
    { label: 'Modes', value: '5 (High, Med, Low, Strobe, SOS)' },
    { label: 'Weight', value: '85g (without battery)' },
    { label: 'Dimensions', value: '115mm x 24mm' },
  ];

  return (
    <section id="specs" className="py-32 px-6 bg-forest-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold italic uppercase tracking-tighter mb-4">Technical <span className="text-tactical-accent">Specifications</span></h2>
          <div className="w-24 h-1 bg-tactical-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {specs.map((spec, i) => (
            <div key={i} className="bg-forest-950 p-8 flex justify-between items-center group hover:bg-forest-900 transition-colors">
              <span className="text-white/40 uppercase font-mono text-xs tracking-widest">{spec.label}</span>
              <span className="font-bold text-tactical-accent group-hover:scale-105 transition-transform">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-forest-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-tactical-accent rounded-sm flex items-center justify-center">
            <Zap className="text-forest-950 w-4 h-4 fill-current" />
          </div>
          <span className="font-mono font-bold tracking-tighter text-lg uppercase italic">UltraFire</span>
        </div>
        
        <div className="text-white/30 text-xs font-mono uppercase tracking-widest text-center">
          © 2026 UltraFire Tactical Systems. All Rights Reserved.
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-white/60 hover:text-tactical-accent transition-colors"><ExternalLink size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-tactical-accent selection:text-forest-950">
      <Navbar />
      <Hero />
      <Features />
      <BeamPreview />
      <Specs />
      
      {/* Final CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-tactical-accent/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold italic uppercase tracking-tighter mb-8">
            Ready to <span className="text-tactical-accent">Own the Night?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Join thousands of professionals who trust the S3 for their daily carry.
          </p>
          <button className="bg-tactical-accent text-forest-950 px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:scale-110 transition-transform shadow-[0_0_30px_rgba(74,222,128,0.3)]">
            Add to Cart — $49.99
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
