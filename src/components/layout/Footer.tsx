import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Instagram, Linkedin } from "lucide-react";
import ewbLogo from "@/assets/ewb-logo.png";

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
    { icon: Instagram, href: "https://www.instagram.com/ewbcbit", label: "Instagram" },
    { icon: Linkedin, href: "https://in.linkedin.com/company/ewb-cbit", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={ewbLogo} 
                alt="EWB CBIT Logo" 
                className="h-12 w-auto"
              />
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
                  href="mailto:ewbcbit@gmail.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  ewbcbit@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:+919652809593"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    +91 96528 09593
                  </a>
                  <a
                    href="tel:+917416102178"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    +91 74161 02178
                  </a>
                </div>
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
