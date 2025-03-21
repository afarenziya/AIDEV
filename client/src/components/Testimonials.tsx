import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  content: string;
  rating: number;
  author: {
    name: string;
    title: string;
    image: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "The AI marketing dashboard completely transformed how we approach our digital campaigns. We saw a 43% increase in conversion rates within just two months.",
    rating: 5,
    author: {
      name: "Sarah Johnson",
      title: "Marketing Director, TechInnovate",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    }
  },
  {
    id: 2,
    content: "The AI-generated website platform delivered a stunning site in days instead of weeks. The design quality was exceptional and perfectly aligned with our brand.",
    rating: 5,
    author: {
      name: "Michael Chen",
      title: "CEO, FutureBrand",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: 3,
    content: "Implementing the AI chatbot reduced our customer service response time by 80% while maintaining high satisfaction rates. A game-changer for our operations.",
    rating: 4.5,
    author: {
      name: "Alicia Rodriguez",
      title: "Operations Manager, Global Connect",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex mb-6">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="fill-secondary text-secondary h-5 w-5" />
      ))}
      
      {hasHalfStar && (
        <div className="relative">
          <Star className="text-secondary h-5 w-5" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="fill-secondary text-secondary h-5 w-5" />
          </div>
        </div>
      )}
      
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={i + fullStars + (hasHalfStar ? 1 : 0)} className="text-secondary h-5 w-5" />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-space mb-4">
            Client <span className="text-secondary">Success Stories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What our clients say about our AI-driven solutions and services.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={itemVariants}
              className="bg-background p-8 rounded-xl border border-primary/20 card-glow relative"
            >
              <div className="absolute -top-5 -left-5 text-5xl text-primary opacity-20">"</div>
              
              <StarRating rating={testimonial.rating} />
              
              <p className="text-muted-foreground mb-6">{testimonial.content}</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.author.image} 
                    alt={testimonial.author.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.author.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
