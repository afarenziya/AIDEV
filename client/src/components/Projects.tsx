import { useState } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, Github, ArrowRightIcon } from "lucide-react";

type ProjectCategory = "All Projects" | "Web Development" | "Digital Marketing" | "AI Solutions";

interface ProjectTag {
  name: string;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  links: {
    caseStudy: string;
    github?: string;
    live?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Predictive Analytics Dashboard",
    description: "AI-powered marketing analytics platform for e-commerce businesses with predictive capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1500&q=80",
    category: "AI Solutions",
    tags: ["React", "TensorFlow.js", "Python"],
    links: {
      caseStudy: "#",
      github: "#",
      live: "#"
    }
  },
  {
    id: 2,
    title: "AI-Generated Website Platform",
    description: "Platform that creates custom websites using AI based on text prompts and business requirements.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1500&q=80",
    category: "Web Development",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS"],
    links: {
      caseStudy: "#",
      github: "#",
      live: "#"
    }
  },
  {
    id: 3,
    title: "Multi-Channel AI Chatbot",
    description: "Intelligent conversational agent that integrates with multiple messaging platforms for customer service.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1500&q=80",
    category: "AI Solutions",
    tags: ["Node.js", "Dialogflow", "MongoDB"],
    links: {
      caseStudy: "#",
      github: "#",
      live: "#"
    }
  }
];

const projectCategories: ProjectCategory[] = ["All Projects", "Web Development", "Digital Marketing", "AI Solutions"];

const getCategoryBgColor = (category: ProjectCategory): string => {
  switch(category) {
    case "AI Solutions":
      return "bg-primary/90";
    case "Web Development":
      return "bg-accent/90";
    case "Digital Marketing":
      return "bg-secondary/90";
    default:
      return "bg-primary/90";
  }
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All Projects");
  
  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-space mb-4">
            Featured <span className="text-secondary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions powered by AI and cutting-edge technologies.
          </p>
        </motion.div>
        
        {/* Project filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`px-4 py-2 ${
                activeCategory === category 
                  ? "bg-primary/20 text-foreground border border-primary/30" 
                  : "bg-background text-muted-foreground hover:bg-primary/20"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="bg-card rounded-xl overflow-hidden card-glow transition-all hover:-translate-y-2 duration-300 border border-primary/10"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-2 right-2 ${getCategoryBgColor(project.category)} text-background px-2 py-1 rounded-md text-sm font-medium`}>
                  {project.category === "AI Solutions" ? "AI Marketing" : project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold font-space mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-primary/20 text-primary px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <Button 
                    variant="link" 
                    className="text-secondary hover:text-white flex items-center gap-1 p-0"
                    asChild
                  >
                    <a href={project.links.caseStudy}>
                      <span>View Case Study</span>
                      <ArrowRightIcon className="h-3 w-3" />
                    </a>
                  </Button>
                  
                  <div className="flex gap-2">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        className="text-muted-foreground hover:text-secondary transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        className="text-muted-foreground hover:text-secondary transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLinkIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button 
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary/10 glow-border inline-flex items-center gap-2"
            asChild
          >
            <a href="#">
              <span>View All Projects</span>
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
