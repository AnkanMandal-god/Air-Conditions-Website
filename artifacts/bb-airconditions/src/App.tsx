import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Brands } from "@/components/Brands";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCTAs } from "@/components/FloatingCTAs";
import { AboutSEO } from "@/components/AboutSEO";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background font-sans">
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <AboutSEO />
          <Services />
          <Brands />
          <WhyChooseUs />
          <Reviews />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingCTAs />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
