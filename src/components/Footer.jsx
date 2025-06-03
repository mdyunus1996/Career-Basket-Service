import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  BookOpenText,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "@/asserts/main-logo.png"; // Adjust the path as necessary

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <a
              href="#home"
              className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
            >
              <img src={Logo} alt="Logo" class="h-16" />
            </a>
          </div>

          <div>
            <p className="text-lg font-bold font-heading mb-4 text-primary-foreground">
              Quick Links
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-accent font-semibold transition-colors text-sm text-primary-foreground/80"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#platforms"
                  className="hover:text-accent font-semibold transition-colors text-sm text-primary-foreground/80"
                >
                  Platforms
                </a>
              </li>
              <li>
                <a
                  href="#clients"
                  className="hover:text-accent font-semibold transition-colors text-sm text-primary-foreground/80"
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent font-semibold transition-colors text-sm text-primary-foreground/80"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-bold font-heading mb-4 text-primary-foreground">
              Connect With Us
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
            <p className="mt-4 text-sm font-semibold text-primary-foreground/80 flex items-center gap-2">
              <Mail className="w-4 h-4 text-white" />
              bharat@careerbaskets.com
            </p>
            <p className="text-sm font-semibold text-primary-foreground/80 flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              +91 94443 34755
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            &copy; {currentYear} CBS Group of Companies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
