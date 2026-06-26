import { motion } from 'framer-motion';
import heroImg from '@/assets/hero-ac.jpg';

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleWords = "Kolkata's Trusted AC Experts".split(" ");

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient & Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a3a] via-[#1a2a3a] to-[#004d66] bg-[length:200%_200%] animate-gradient z-0"></div>
      
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <h1 className="text-[32px] md:text-[48px] font-bold text-white leading-tight mb-6 flex flex-wrap gap-x-3">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[18px] text-white/80 mb-10 max-w-2xl"
          >
            Sales, Installation & Service for Residential and Commercial Clients
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="https://wa.me/918777793800?text=I%20need%20AC%20services"
              target="_blank" rel="noopener noreferrer"
              className="relative overflow-hidden group bg-daikin text-white px-8 py-4 rounded-[12px] font-semibold text-center hover:bg-daikin/90 transition-all"
            >
              <span className="relative z-10">Chat on WhatsApp</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
            </a>
            
            <a 
              href="tel:+918777793800"
              className="relative overflow-hidden group border-2 border-daikin text-white px-8 py-4 rounded-[12px] font-semibold text-center hover:bg-daikin/10 transition-all"
            >
              <span className="relative z-10">Call Us</span>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-4 md:left-8 bg-black/30 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-lg"
      >
        <div className="flex items-center text-white font-medium">
          <span className="text-yellow-400 mr-2 text-xl">★</span>
          5.0 on Google
        </div>
      </motion.div>
    </section>
  );
}
