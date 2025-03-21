import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, floatAnimation } from "@/lib/animations";
import { scrollToSection } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background opacity-70"></div>
        <img 
          src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1950&q=80" 
          alt="Digital abstract background" 
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("up", 0.2)}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space mb-4">
              <span className="gradient-text">AI-Driven Growth</span> & 
              <span className="text-secondary"> Intelligent Web Solutions</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Leveraging cutting-edge AI technologies to create exceptional digital experiences and marketing strategies that drive measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30 animate-pulse"
              >
                View My Work
              </Button>
              
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary/10 glow-border"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:block"
            variants={floatAnimation}
            animate="animate"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden card-glow">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1500&q=80" 
                alt="AI visualization" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <button 
            onClick={() => scrollToSection("ai-capabilities")} 
            className="text-muted-foreground opacity-70 hover:opacity-100 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
