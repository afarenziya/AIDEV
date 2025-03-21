import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactMessageSchema } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Mail, 
  PhoneIcon, 
  MapPinIcon, 
  SendIcon,
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  DribbbleIcon,
  BookIcon,
  MessageCircleIcon
} from "lucide-react";

type ContactMessageInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ContactInfo = ({ icon, title, children }: ContactInfoProps) => (
  <div className="flex items-start">
    <div className="bg-primary/20 p-3 rounded-lg mr-4">
      {icon}
    </div>
    <div>
      <h4 className="font-bold">{title}</h4>
      {children}
    </div>
  </div>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    className="bg-primary/20 p-3 rounded-lg text-secondary hover:bg-primary/30 transition-all"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactMessageInput>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactMessageInput) => {
    setIsSubmitting(true);
    try {
      const response = await apiRequest("POST", "/api/contact", data);
      
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Something went wrong!",
        description: "Your message could not be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-space mb-4">
            Get in <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence with AI-powered solutions? Let's discuss your project.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="bg-card p-8 rounded-xl border border-primary/20 card-glow"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-space mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <ContactInfo icon={<Mail className="text-secondary" />} title="Email">
                <a href="mailto:afarenziya@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors">
                  afarenziya@gmail.com
                </a>
              </ContactInfo>
              
              <ContactInfo icon={<PhoneIcon className="text-secondary" />} title="Phone">
                <div className="flex flex-col">
                  <a href="tel:+919315869313" className="text-muted-foreground hover:text-secondary transition-colors">
                    +91 9315869313
                  </a>
                  <a href="tel:+919999491146" className="text-muted-foreground hover:text-secondary transition-colors">
                    +91 9999491146
                  </a>
                </div>
              </ContactInfo>
              
              <ContactInfo icon={<MapPinIcon className="text-secondary" />} title="Address">
                <p className="text-muted-foreground">
                  85 SD-II, Greater Noida West<br />
                  Gautam Buddha Nagar, UP, India
                </p>
              </ContactInfo>
              
              <ContactInfo icon={<MessageCircleIcon className="text-secondary" />} title="WhatsApp">
                <a href="https://wa.me/919315869313" className="text-muted-foreground hover:text-secondary transition-colors">
                  +91 9315869313
                </a>
              </ContactInfo>
            </div>
            
            <div className="mt-10">
              <h4 className="font-bold mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                <SocialLink href="#" icon={<TwitterIcon className="h-5 w-5" />} />
                <SocialLink href="#" icon={<LinkedinIcon className="h-5 w-5" />} />
                <SocialLink href="#" icon={<GithubIcon className="h-5 w-5" />} />
                <SocialLink href="#" icon={<DribbbleIcon className="h-5 w-5" />} />
                <SocialLink href="#" icon={<BookIcon className="h-5 w-5" />} />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-card p-8 rounded-xl border border-primary/20 card-glow"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-space mb-6">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your name" 
                          className="bg-background border border-primary/30 rounded-lg focus:border-secondary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your email" 
                          type="email"
                          className="bg-background border border-primary/30 rounded-lg focus:border-secondary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter subject" 
                          className="bg-background border border-primary/30 rounded-lg focus:border-secondary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your message" 
                          rows={4}
                          className="bg-background border border-primary/30 rounded-lg focus:border-secondary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  <span>Send Message</span>
                  <SendIcon className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
