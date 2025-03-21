import { useState, useEffect } from "react";
import { MessageCircleIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton = ({ phoneNumber }: WhatsAppButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show the button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute bottom-20 right-0 bg-white dark:bg-card p-4 rounded-lg shadow-lg mb-4 w-64 border border-primary/20"
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.3 }}
                transition={{ type: "spring", damping: 25, stiffness: 500 }}
              >
                <div className="text-sm font-medium mb-3 text-foreground">
                  Need help? Chat with us on WhatsApp
                </div>
                <div className="text-xs text-muted-foreground mb-4">
                  Click the button below to start a conversation
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white py-2 px-4 rounded-lg text-sm font-medium inline-flex items-center justify-center w-full hover:bg-[#20BD5C] transition-colors"
                >
                  <MessageCircleIcon className="h-4 w-4 mr-2" />
                  Start Chat
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={toggleOpen}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
              isOpen ? "bg-red-500" : "bg-[#25D366]"
            } text-white hover:scale-110 transition-all`}
            aria-label="Chat on WhatsApp"
          >
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MessageCircleIcon className="h-6 w-6" />
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;