import { motion } from 'framer-motion';
import heroImg from '@/assets/hero-ac.jpg';

export function Hero() {
  const titleWords = "Kolkata's Trusted AC Experts".split(' ');

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a3a] via-[#1a2a3a] to-[#004d66] bg-[length:200%_200%] animate-gradient z-0" />

      {/* Background image at 25% opacity */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="max-w-4xl">
          <h1
            className="font-bold text-white leading-[1.05] mb-6 flex flex-wrap gap-x-4"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: 'clamp(42px, 7vw, 72px)',
            }}
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.82 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 mb-10 max-w-2xl leading-relaxed"
            style={{ fontSize: '18px' }}
          >
            From sales and installation to servicing and repair — B.B. Airconditions delivers reliable cooling solutions for homes and businesses across Kolkata.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918777793800?text=I%20need%20AC%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group bg-daikin text-white px-10 py-4 font-bold text-lg text-center hover:bg-daikin/90 transition-all"
              style={{ borderRadius: '6px' }}
            >
              <span className="relative z-10">Chat on WhatsApp</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_0.8s_ease-in-out] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />
            </a>

            {/* Call Us — left-to-right fill */}
            <a
              href="tel:+918777793800"
              className="relative overflow-hidden group border-2 border-white text-white px-10 py-4 font-bold text-lg text-center transition-colors duration-300"
              style={{ borderRadius: '6px' }}
            >
              <span
                className="absolute inset-0 bg-white"
                style={{
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.35s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
              />
              <span
                className="absolute inset-0 bg-white"
                style={{ transform: 'translateX(-100%)', transition: 'transform 0.35s ease' }}
              />
              <span className="relative z-10 group-hover:text-[#1a2a3a] transition-colors duration-300">Call Us</span>
              <span
                className="absolute inset-0 -z-0 translate-x-[-100%] group-hover:translate-x-0 bg-white transition-transform duration-350 ease-in-out"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Redesigned 5-star badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-4 md:left-8 bg-black/40 backdrop-blur-md border border-white/15 px-5 py-3 rounded-xl flex items-center gap-3"
      >
        <div className="flex flex-col items-center justify-center bg-yellow-400/20 rounded-lg p-2">
          <svg className="w-6 h-6 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div>
          <p className="text-white font-bold text-base leading-tight">5.0 on Google</p>
          <p className="text-white/50 text-xs">Based on 4 reviews</p>
        </div>
      </motion.div>
    </section>
  );
}
