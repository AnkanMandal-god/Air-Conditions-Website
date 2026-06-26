import { motion } from 'framer-motion';
import heroImg from '@/assets/hero-ac.jpg';

const rajdhani = "'Rajdhani', sans-serif";

export function Hero() {
  const titleWords = "Kolkata's Trusted AC Experts".split(' ');

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background image — clearly visible */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />

      {/* Layer 1: left-side directional fade — text side darkens, right stays bright */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(14,26,40,0.88) 0%, rgba(14,26,40,0.70) 35%, rgba(14,26,40,0.35) 60%, rgba(14,26,40,0.10) 100%)',
        }}
      />

      {/* Layer 2: bottom fade for badge legibility */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(14,26,40,0.65) 0%, transparent 100%)',
        }}
      />

      {/* Layer 3: top fade into nav */}
      <div
        className="absolute top-0 left-0 right-0 h-28 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(14,26,40,0.5) 0%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-24">
        <div className="max-w-2xl">
          {/* Thin daikin-blue accent line above headline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="origin-left w-16 h-[3px] bg-daikin rounded-full mb-6"
          />

          <h1
            className="font-bold text-white leading-[1.05] mb-6 flex flex-wrap gap-x-4"
            style={{
              fontFamily: rajdhani,
              fontSize: 'clamp(42px, 7vw, 72px)',
            }}
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 + i * 0.12 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-white/75 mb-10 max-w-xl leading-relaxed"
            style={{ fontSize: '17px' }}
          >
            From sales and installation to servicing and repair — B.B. Airconditions delivers reliable cooling solutions for homes and businesses across Kolkata.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918777793800?text=I%20need%20AC%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group bg-daikin text-white px-9 py-4 font-bold text-lg text-center hover:bg-daikin/90 transition-all"
              style={{ borderRadius: '6px' }}
            >
              <span className="relative z-10">Chat on WhatsApp</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_0.8s_ease-in-out] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />
            </a>

            {/* Call Us — slide fill */}
            <a
              href="tel:+918777793800"
              className="relative overflow-hidden group border-2 border-white/70 text-white px-9 py-4 font-bold text-lg text-center transition-colors duration-300 hover:border-white"
              style={{ borderRadius: '6px' }}
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-white transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 group-hover:text-[#1a2a3a] transition-colors duration-300">
                Call Us
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Google Rating Badge — bottom-right, animated */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.6, type: 'spring', stiffness: 100 }}
        className="absolute bottom-8 right-6 md:right-10 z-10"
      >
        <div className="relative">
          {/* Outer glow ring — animated pulse */}
          <div
            className="absolute inset-0 rounded-2xl animate-[pulse-slow_2.5s_ease-in-out_infinite]"
            style={{
              background: 'radial-gradient(circle, rgba(0,153,204,0.25) 0%, transparent 70%)',
              transform: 'scale(1.3)',
            }}
          />

          {/* Badge card */}
          <div
            className="relative flex items-center gap-4 px-5 py-4 rounded-2xl border"
            style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderColor: 'rgba(255,255,255,0.12)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}
          >
            {/* Google G icon */}
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.12)' }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>

            {/* Rating info */}
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                {/* Stars */}
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8 + i * 0.08, type: 'spring', stiffness: 200 }}
                    className="w-3.5 h-3.5 fill-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </motion.svg>
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-white font-bold text-xl leading-none" style={{ fontFamily: rajdhani }}>
                  5.0
                </span>
                <span className="text-white/50 text-xs">on Google</span>
              </div>
              <p className="text-white/35 text-[10px] mt-0.5 tracking-wide">Based on 4 reviews</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
