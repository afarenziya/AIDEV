import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AICapabilities from '@/components/AICapabilities';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { scrollToSection } from '@/lib/utils';

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <ParticleBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <AICapabilities />
        <Projects />
        <Testimonials />
        <Skills />
        <About />
        <Contact />
      </main>
      
      <Footer />
      
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={() => scrollToSection('home')}
            className="fixed bottom-6 right-6 bg-primary/80 text-white p-3 rounded-full shadow-lg z-50"
            aria-label="Back to top"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
