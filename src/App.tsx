import React from 'react';
import { motion } from 'framer-motion';
//@ts-ignore
import logo from './assets/logo.jpg';
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
    window.location.href = "mailto:Info@rohilatransportltd.co.uk?subject=Inquiry for Rohila Transport";
  };
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
    {/* Navigation */}
  {/* Navigation */}
<nav className="flex items-center justify-between px-8 py-6 bg-white sticky top-0 z-50 shadow-sm">
  <div className="flex items-center space-x-2">
    {/* This is the part that makes the logo appear */}
    <img src={logo} alt="Rohila Transport Logo" className="h-12 md:h-16 w-auto" />
  </div>
  <div className="hidden md:flex space-x-8 font-medium items-center text-[#1a2b4b]">
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
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-slate-300">
              Rohila Transport Ltd provides industry-leading logistics and haulage solutions across the UK.
            </p>
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
      className="border-2 border-[#1a2b4b] text-[#1a2b4b] px-8 py-3 rounded font-bold hover:bg-[#1a2b4b] hover:text-white transition"
    >
      Email Us
    </button>
  </div>
</FadeIn>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a2b4b]">Our Logistics Services</h2>
            <div className="w-20 h-1 bg-[#d32f2f] mx-auto mt-4"></div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Nationwide Haulage", desc: "Full load and part load distribution across the entire country." },
            { title: "Timed Deliveries", desc: "Precision logistics for time-critical shipments that cannot wait." },
            { title: "Specialized Transport", desc: "Expert handling for unique, heavy, or fragile cargo requirements." }
          ].map((service, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="p-8 border border-slate-100 rounded-xl hover:shadow-xl transition group h-full text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-lg mb-6 flex items-center justify-center group-hover:bg-[#d32f2f] transition mx-auto">
                  <span className="text-[#1a2b4b] group-hover:text-white font-bold text-xl">{i + 1}</span>
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
              <p>Email: <a href="mailto:Info@rohilatransportltd.co.uk" className="hover:text-white transition">bitupdp@gmail.com</a></p>
              <p>WhatsApp: <a href="https://wa.me/447401130540" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">+44 7401 130540</a></p>
              <p className="pt-4">© 2026 Rohila Transport Ltd. All rights reserved.</p>
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
};

export default App;
