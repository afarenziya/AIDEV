import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { fadeIn } from "@/lib/animations";

const AboutStat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="text-3xl font-bold text-secondary mb-2">{value}</div>
    <p className="text-muted-foreground">{label}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-space mb-6">
              About <span className="text-secondary">Me</span>
            </h2>
            
            <p className="text-muted-foreground mb-6">
              I'm a dedicated AI specialist, digital marketer, and web developer who combines cutting-edge technology with strategic thinking to create exceptional digital experiences.
            </p>
            
            <p className="text-muted-foreground mb-6">
              With over 8 years of experience in the digital space, I've helped businesses of all sizes leverage AI to transform their marketing strategies and web presence. My approach focuses on data-driven solutions that deliver measurable results.
            </p>
            
            <p className="text-muted-foreground mb-8">
              I'm passionate about staying at the forefront of AI and technological advancements, constantly experimenting with new tools and techniques to provide innovative solutions for my clients.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <AboutStat value="8+" label="Years Experience" />
              <AboutStat value="50+" label="Projects Completed" />
              <AboutStat value="35+" label="Happy Clients" />
              <AboutStat value="12+" label="Industry Awards" />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30"
              >
                Get In Touch
              </Button>
              
              <Button 
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 glow-border"
                asChild
              >
                <a href="#" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary rounded-2xl"></div>
              
              <div className="relative z-10 rounded-2xl overflow-hidden card-glow border border-primary/30">
                <img 
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=1500&q=80" 
                  alt="Portfolio owner" 
                  className="w-full"
                />
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-primary/20 backdrop-blur-lg p-4 rounded-lg border border-primary/30 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-lg font-bold text-white mb-1">AI & Digital Expert</div>
                <div className="text-secondary">Available for Freelance</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
