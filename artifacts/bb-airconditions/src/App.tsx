import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { AboutSEO } from "@/components/AboutSEO";
import { Services } from "@/components/Services";
import { Brands } from "@/components/Brands";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCTAs } from "@/components/FloatingCTAs";
import { BookNowModal } from "@/components/BookNowModal";

const queryClient = new QueryClient();

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string | undefined>(undefined);

  const openBooking = (service?: string) => {
    setBookingService(service);
    setBookingOpen(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background font-sans">
        <Navbar />
        <main>
          <Hero onBookNow={() => openBooking()} />
          <TrustBar />
          <AboutSEO />
          <Services onBookNow={openBooking} />
          <Brands />
          <WhyChooseUs />
          <Reviews />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingCTAs />
        <Toaster />
        <BookNowModal
          open={bookingOpen}
          onClose={() => setBookingOpen(false)}
          defaultService={bookingService}
        />
      </div>
    </QueryClientProvider>
  );
}

export default App;
