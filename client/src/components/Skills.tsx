import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Brain, Megaphone, Code } from 'lucide-react';
import { 
  SiReact, SiPython, SiNodedotjs, 
  SiAwsamplify, SiMongodb, SiGooglecloud,
  SiTensorflow, SiOpenai, SiGooglevertexai, SiStabilityai,
  SiGoogleanalytics, SiMetaads, SiSemrush, SiHubspot
} from 'react-icons/si';

interface SkillItem {
  name: string;
  percentage: number;
}

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const aiSkills: SkillItem[] = [
  { name: "OpenAI (GPT-4, DALL-E)", percentage: 95 },
  { name: "TensorFlow & PyTorch", percentage: 85 },
  { name: "Google Vertex AI", percentage: 80 },
  { name: "Midjourney & Stable Diffusion", percentage: 90 },
];

const marketingSkills: SkillItem[] = [
  { name: "Google Analytics & Google Ads", percentage: 90 },
  { name: "HubSpot & Marketo", percentage: 85 },
  { name: "Facebook & Instagram Ads", percentage: 95 },
  { name: "SEMrush & Ahrefs", percentage: 88 },
];

const devSkills: SkillItem[] = [
  { name: "React & Next.js", percentage: 95 },
  { name: "Node.js & Express", percentage: 90 },
  { name: "Python & Django", percentage: 85 },
  { name: "Tailwind CSS & GSAP", percentage: 92 },
];

const technologies: TechItem[] = [
  { name: "React", icon: <SiReact className="h-10 w-10 text-secondary" /> },
  { name: "Python", icon: <SiPython className="h-10 w-10 text-secondary" /> },
  { name: "Node.js", icon: <SiNodedotjs className="h-10 w-10 text-secondary" /> },
  { name: "AWS", icon: <SiAwsamplify className="h-10 w-10 text-secondary" /> },
  { name: "MongoDB", icon: <SiMongodb className="h-10 w-10 text-secondary" /> },
  { name: "Google Cloud", icon: <SiGooglecloud className="h-10 w-10 text-secondary" /> },
];

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const SkillCategory = ({ title, icon, skills }: SkillCategoryProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const inView = useInView(progressRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div 
      className="bg-card p-8 rounded-xl border border-primary/20 card-glow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold font-space mb-6 flex items-center">
        {icon}
        <span className="ml-3">{title}</span>
      </h3>
      
      <div className="space-y-6" ref={progressRef}>
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-secondary">{skill.percentage}%</span>
            </div>
            <div className="h-2 bg-card border border-primary/30 rounded-full">
              <motion.div 
                className="progress-bar"
                initial={{ width: 0 }}
                variants={{
                  visible: { width: `${skill.percentage}%` }
                }}
                animate={controls}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-space mb-4">
            Technologies & <span className="text-secondary">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set combining cutting-edge AI, marketing tools, and development technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <SkillCategory 
            title="AI Tools" 
            icon={<Brain className="text-secondary" />} 
            skills={aiSkills} 
          />
          
          <SkillCategory 
            title="Marketing Tools" 
            icon={<Megaphone className="text-secondary" />} 
            skills={marketingSkills} 
          />
          
          <SkillCategory 
            title="Development" 
            icon={<Code className="text-secondary" />} 
            skills={devSkills} 
          />
        </div>
        
        {/* Technology Icons */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold font-space mb-10 text-center">
            Technologies I <span className="text-secondary">Work With</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="tech-card p-4 rounded-lg flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {tech.icon}
                <span className="text-sm text-muted-foreground mt-3">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
