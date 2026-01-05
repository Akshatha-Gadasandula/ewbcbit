import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "About Us", path: "/about" },
      { name: "Our Projects", path: "/projects" },
      { name: "Meet the Team", path: "/team" },
      { name: "Gallery", path: "/gallery" },
      { name: "Contact", path: "/contact" },
    ],
    initiatives: [
      { name: "Clean Water", path: "/projects" },
      { name: "Renewable Energy", path: "/projects" },
      { name: "Infrastructure", path: "/projects" },
      { name: "Community Dev", path: "/projects" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">E</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-xl leading-tight">
                  EWB CBIT
                </span>
                <span className="text-xs text-primary-foreground/60 tracking-wide">
                  Engineers Without Borders
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Empowering communities through sustainable engineering solutions. 
              Building a better tomorrow, one project at a time.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center
                           hover:bg-primary transition-colors duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Initiatives */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Focus</h4>
            <ul className="space-y-3">
              {footerLinks.initiatives.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  CBIT Campus, Gandipet,<br />
                  Hyderabad, Telangana 500075
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:ewb@cbit.ac.in"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  ewb@cbit.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              © {currentYear} Engineers Without Borders — CBIT Student Chapter. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              Building sustainable change, together.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
