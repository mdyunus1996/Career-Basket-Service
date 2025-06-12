import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpenText } from "lucide-react";
import Logo from "@/asserts/main-logo.png"; // Adjust the path as necessary
const navItems = [
  { name: "Home", path: "#home", id: "home" },
  { name: "About Us", path: "#about", id: "about" },
  // { name: "Services", path: "#services", id: "services" },
  { name: "Platforms", path: "#platforms", id: "platforms" },
  { name: "Clients", path: "#clients", id: "clients" },
  { name: "Contact", path: "#contact", id: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id.substring(1)); // remove #
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-6">
        <a
          href="#home"
          className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
        >
          {/* <BookOpenText className="h-8 w-8" /> */}
          {/* <span className="text-2xl font-bold font-heading">CBS Group</span> */}
          <img src={Logo} alt="Logo" class="mx-auto my-4 h-16" />
        </a>

        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              onClick={() => scrollToSection(item.path)}
              className="text-foreground hover:text-charcoal-gray hover:font-extrabold transition-colors font-bold"
            >
              {item.name}
            </Button>
          ))}
        </nav>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-sm shadow-lg absolute w-full"
        >
          <nav className="flex flex-col items-center py-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => scrollToSection(item.path)}
                className="w-full text-lg py-3 text-foreground hover:text-secondary hover:font-bold transition-colors"
              >
                {item.name}
              </Button>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
