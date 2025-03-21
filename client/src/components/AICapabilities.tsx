import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { CheckIcon, ChartLineIcon, CodeIcon } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

interface CapabilityItem {
  title: string;
  description: string;
}

const marketingCapabilities: CapabilityItem[] = [
  {
    title: "Predictive Analytics",
    description: "Forecast customer behavior and market trends with machine learning algorithms to optimize campaigns."
  },
  {
    title: "AI-Driven Content Creation",
    description: "Generate engaging, personalized content at scale while maintaining brand voice and message consistency."
  },
  {
    title: "Intelligent Chatbots",
    description: "Deploy conversational AI to provide 24/7 customer service and lead qualification."
  }
];

const developmentCapabilities: CapabilityItem[] = [
  {
    title: "Automated Code Optimization",
    description: "Enhance code quality and performance through AI-driven analysis and refactoring."
  },
  {
    title: "AI-Generated UI/UX",
    description: "Create stunning interfaces using AI design tools trained on best practices and user behavior."
  },
  {
    title: "Smart Analytics Integration",
    description: "Implement advanced data collection and visualization for actionable business insights."
  }
];

const CapabilityCard = ({ 
  title, 
  icon, 
  capabilities 
}: { 
  title: string; 
  icon: React.ReactNode;
  capabilities: CapabilityItem[];
}) => {
  return (
    <motion.div 
      className="bg-background/50 p-8 rounded-2xl border border-primary/20 card-glow"
      variants={itemVariants}
    >
      <div className="flex items-start mb-6">
        <div className="bg-primary/20 p-3 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold font-space">{title}</h3>
      </div>
      
      <ul className="space-y-4">
        {capabilities.map((capability, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            variants={itemVariants}
          >
            <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
              <CheckIcon className="h-3 w-3 text-secondary" />
            </div>
            <div>
              <h4 className="font-bold text-lg">{capability.title}</h4>
              <p className="text-muted-foreground">{capability.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const AICapabilities = () => {
  return (
    <section id="ai-capabilities" className="py-20 relative bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-space mb-4">
            AI-Powered <span className="text-secondary">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transforming digital marketing and web development through advanced artificial intelligence technologies.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <CapabilityCard 
            title="AI-Enhanced Marketing" 
            icon={<ChartLineIcon className="h-6 w-6 text-secondary" />}
            capabilities={marketingCapabilities}
          />
          
          <CapabilityCard 
            title="AI-Powered Development" 
            icon={<CodeIcon className="h-6 w-6 text-secondary" />}
            capabilities={developmentCapabilities}
          />
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button 
            variant="link" 
            onClick={() => scrollToSection("projects")}
            className="text-secondary hover:text-white flex items-center gap-2"
          >
            <span>See AI Solutions in Action</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AICapabilities;
