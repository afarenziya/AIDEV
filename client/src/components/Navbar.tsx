import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

interface MenuItem {
  label: string;
  sectionId: string;
}

const menuItems: MenuItem[] = [
  { label: "Home", sectionId: "home" },
  { label: "AI Solutions", sectionId: "ai-capabilities" },
  { label: "Projects", sectionId: "projects" },
  { label: "Skills", sectionId: "skills" },
  { label: "About", sectionId: "about" },
  { label: "Contact", sectionId: "contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 20);

      // Determine which section is in view
      const sections = menuItems.map(item => item.sectionId);
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-primary/20' : 'bg-transparent'} transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <div className="text-2xl font-space font-bold gradient-text cursor-pointer">
                AI<span className="text-secondary">DEV</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)}
                className={`text-foreground transition-colors hover:text-secondary ${
                  activeSection === item.sectionId ? "text-secondary" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="outline"
              onClick={() => handleNavClick("contact")}
              className="bg-primary/20 border border-primary text-foreground hover:bg-primary/30 glow-border"
            >
              Contact
            </Button>
          </nav>
          
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-l border-primary/20 w-[280px]">
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <button
                    key={item.sectionId}
                    onClick={() => {
                      handleNavClick(item.sectionId);
                      document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                    }}
                    className={`px-3 py-2 rounded-md text-foreground hover:bg-primary/20 text-left ${
                      activeSection === item.sectionId ? "bg-primary/20" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => {
                    handleNavClick("contact");
                    document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                  }}
                  className="bg-primary/20 border border-primary text-foreground hover:bg-primary/30"
                >
                  Contact
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
