import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const rajdhani = "'Rajdhani', sans-serif";

const reviews = [
  {
    name: 'Rahul Sharma',
    location: 'Salt Lake, Kolkata',
    rating: 5,
    text: 'Excellent service! The team installed our new Daikin split AC within a few hours. Very professional and tidy. Will definitely call them again for servicing.',
    date: 'March 2024',
  },
  {
    name: 'Priya Banerjee',
    location: 'New Town, Kolkata',
    rating: 5,
    text: 'My old AC stopped cooling in the peak summer heat. B.B. Airconditions came the same day and fixed it quickly. Honest pricing, no hidden charges.',
    date: 'May 2024',
  },
  {
    name: 'Sanjay Gupta',
    location: 'Park Street, Kolkata',
    rating: 5,
    text: 'We needed commercial AC installation for our office — 6 units. They handled the whole project smoothly, on time and within budget. Highly recommended.',
    date: 'January 2024',
  },
  {
    name: 'Meena Das',
    location: 'Behala, Kolkata',
    rating: 5,
    text: 'Very knowledgeable technicians. They diagnosed the problem with our old unit and saved us from buying a new one. Trustworthy and affordable.',
    date: 'April 2024',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          fill={i < rating ? '#f59e0b' : 'transparent'}
          stroke={i < rating ? '#f59e0b' : '#6b7280'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  isVisible,
  delay,
}: {
  review: (typeof reviews)[0];
  isVisible: boolean;
  delay: number;
}) {
  return (
    <div
      className="flex flex-col bg-white/5 border border-white/8 p-7 hover:border-daikin/30 hover:bg-white/8 transition-all duration-300"
      style={{
        borderRadius: '4px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, border-color 0.3s, background-color 0.3s`,
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-white font-semibold text-base" style={{ fontFamily: rajdhani }}>
            {review.name}
          </p>
          <p className="text-white/40 text-xs mt-0.5">{review.location}</p>
        </div>
        {/* Google G badge */}
        <div
          className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 text-xs text-white/60 font-medium"
          style={{ borderRadius: '4px' }}
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Google
        </div>
      </div>

      <StarRating rating={review.rating} />

      <p className="text-white/65 text-sm leading-relaxed mt-3 flex-1">{review.text}</p>

      <p className="text-white/30 text-xs mt-4">{review.date}</p>
    </div>
  );
}

export function Reviews() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="reviews"
      className="py-24"
      style={{ background: 'linear-gradient(135deg, #080c14 0%, #0c1828 50%, #080e1a 100%)' }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="text-white mb-3"
            style={{ fontFamily: rajdhani, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700 }}
          >
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-daikin mx-auto rounded-full mb-4" />
          {/* Aggregate badge */}
          <div className="inline-flex items-center gap-2 mt-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5" fill="#f59e0b" stroke="#f59e0b" strokeWidth={1.5} />
              ))}
            </div>
            <span className="text-white font-semibold text-lg" style={{ fontFamily: rajdhani }}>5.0</span>
            <span className="text-white/40 text-sm">· Based on 4 Google reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" ref={sectionRef}>
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} isVisible={isVisible} delay={idx * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
