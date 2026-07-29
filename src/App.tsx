import React from 'react';
import { motion } from 'framer-motion';
import logo from './assets/logo.jpg';

// Fixed FadeIn Component
const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@rohilatransportltd.co.uk?subject=Inquiry for Rohila Transport Ltd";
  };

  const services = [
    {
      title: "Nationwide Haulage",
      desc: "Full load and part load distribution across the entire country.",
    },
    {
      title: "Timed Deliveries",
      desc: "Precision logistics for time-critical shipments that cannot wait.",
    },
    {
      title: "Specialized Transport",
      desc: "Expert handling for unique, heavy, or fragile cargo requirements.",
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Rohila Transport Logo" className="h-12 md:h-16 w-auto" />
        </div>
        <div className="hidden md:flex space-x-8 font-medium items-center">
          <a href="#home" className="hover:text-[#d32f2f] transition">Home</a>
          <a href="#services" className="hover:text-[#d32f2f] transition">Services</a>
          <a 
            href="https://wa.me/447401130540" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#d32f2f] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#b71c1c] transition"
          >
            WhatsApp Us
          </a>
        </div>
      </nav>
        {/* Hero Section */}
      <section id="home" className="relative h-[80vh] flex items-center justify-center bg-[#1a2b4b] text-white">
        <div className="relative z-10 text-center px-4">
          <FadeIn>
            <h2 className="text-sm uppercase tracking-[0.3em] mb-4 text-red-500 font-bold">
              Reliable | Professional | Nationwide
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Moving Your Business <br /> Forward.
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-slate-300">
              Rohila Transport Ltd provides industry-leading logistics and haulage solutions across the UK.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/447401130540" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#d32f2f] text-white px-8 py-3 rounded font-bold hover:bg-[#b71c1c] transition text-center"
              >
                Get a Quote via WhatsApp
              </a>
              <button 
                onClick={handleEmailClick}
                className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-[#1a2b4b] transition"
              >
                Email Us
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Logistics Services</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
        </FadeIn>
        <section id="why-us" className="py-20 px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <FadeIn>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Why Us</h2>
        <div className="w-20 h-1 bg-red-600 mx-auto"></div>
      </div>
    </FadeIn>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Experienced Drivers",
          desc: "Our drivers have many years of industry experience, ensuring your goods are in expert hands."
        },
        {
          title: "Safe Deliveries",
          desc: "We promise good and safe deliveries, prioritizing the security of your cargo from start to finish."
        },
        {
          title: "Professional Care",
          desc: "At Rohila Transport Ltd, we ensure every journey is handled with the utmost professionalism."
        }
      ].map((item, i) => (
        <FadeIn key={i} delay={i * 0.2}>
          <div className="p-8 bg-slate-50 rounded-xl hover:shadow-lg transition h-full border border-slate-100">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-6 font-bold text-red-600">
              {i + 1}
            </div>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
</section>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="p-8 bg-slate-50 rounded-xl hover:shadow-lg transition">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-6 font-bold text-red-600">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 justify-between items-center">
          <FadeIn>
            <div>
              <h3 className="text-2xl font-bold mb-2">ROHILA TRANSPORT LTD</h3>
              <p className="text-slate-400">Reliable. Professional. Nationwide.</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="text-md md:text-right mt-8 md:mt-0 text-slate-400 space-y-2">
              <p>Email: <a href="mailto:info@rohilatransportltd.co.uk" className="hover:text-white transition">info@rohilatransportltd.co.uk</a></p>
              <p>WhatsApp: <a href="https://wa.me/447401130540" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">+44 7401 130540</a></p>
              <p className="pt-4 text-xs">© 2026 Rohila Transport Ltd. All rights reserved.</p>
              <section className="py-16 px-8 max-w-7xl mx-auto">
  <FadeIn>
    <div className="text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Why us</h2>
      <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
        Our drivers have many years of experience, and we promise good and safe deliveries. 
        At Rohila Transport Ltd, we prioritize the safety of your cargo and ensure every 
        journey is handled with the utmost professionalism and care.
      </p>
    </div>
  </FadeIn>
</section>
              
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
};

export default App;

