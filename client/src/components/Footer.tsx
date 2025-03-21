import { Link } from "wouter";
import { scrollToSection } from "@/lib/utils";
import {
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  DribbbleIcon
} from "lucide-react";

interface FooterLinkGroup {
  title: string;
  links: {
    label: string;
    href: string;
    isSection?: boolean;
  }[];
}

const footerLinks: FooterLinkGroup[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "home", isSection: true },
      { label: "AI Solutions", href: "ai-capabilities", isSection: true },
      { label: "Projects", href: "projects", isSection: true },
      { label: "Skills", href: "skills", isSection: true },
      { label: "About", href: "about", isSection: true },
      { label: "Contact", href: "contact", isSection: true }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "AI Marketing Solutions", href: "#" },
      { label: "Web Development", href: "#" },
      { label: "Chatbot Development", href: "#" },
      { label: "SEO Optimization", href: "#" },
      { label: "Content Strategy", href: "#" }
    ]
  }
];

const Footer = () => {
  const handleLinkClick = (href: string, isSection?: boolean) => {
    if (isSection) {
      scrollToSection(href);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-card border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Link href="/">
                <span className="text-2xl font-space font-bold gradient-text inline-block cursor-pointer">
                  AI<span className="text-secondary">DEV</span>
                </span>
              </Link>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming digital experiences with AI-powered marketing and web development solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <DribbbleIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h3 className="font-bold font-space mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.isSection ? `#${link.href}` : link.href}
                      className="text-muted-foreground hover:text-secondary transition-colors"
                      onClick={(e) => {
                        if (link.isSection) {
                          e.preventDefault();
                          handleLinkClick(link.href, link.isSection);
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} AIDEV. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-secondary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-muted-foreground hover:text-secondary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
