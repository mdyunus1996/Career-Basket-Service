import React from "react";
import Logo from "@/asserts/main-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-secondary text-primary-foreground pt-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          {/* Logo */}
          <div>
            <a
              href="#home"
              className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
            >
              <img src={Logo} alt="Logo" className="h-40 w-45" />
            </a>
          </div>

          {/* Quick Links as inline text */}
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold mb-4 text-primary-foreground charcoal-gray">
              Quick Links
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold charcoal-gray">
              <a href="#about" className="hover:text-accent transition-colors">
                About Us
              </a>
              <a
                href="#platforms"
                className="hover:text-accent transition-colors"
              >
                Platforms
              </a>
              <a
                href="#clients"
                className="hover:text-accent transition-colors"
              >
                Clients
              </a>
              <a
                href="#contact"
                className="hover:text-accent transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact and Social */}
          {/* <div>
            <p className="text-lg font-bold mb-4 charcoal-gray">
              Connect With Us
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="charcoal-gray hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="charcoal-gray hover:text-accent transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="charcoal-gray hover:text-accent transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div> */}
        </div>

        {/* Footer bottom */}
        <div className="border-t pt-2 text-center font-small charcoal-gray">
          <p className="text-xs">
            &copy; {currentYear} Career Basket Services Pvt. Ltd. | All Rights
            Reserved
          </p>
          <p className="text-xs">Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
