import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ewbLogo from "@/assets/ewb-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={ewbLogo} 
              alt="EWB CBIT Logo" 
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className={cn(
                "font-heading font-semibold text-lg leading-tight transition-colors",
                scrolled ? "text-foreground" : "text-primary-foreground"
              )}>
                EWB CBIT
              </span>
              <span className={cn(
                "text-xs tracking-wide transition-colors",
                scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              )}>
                Engineers Without Borders
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative font-medium text-sm tracking-wide transition-colors duration-200",
                  location.pathname === link.path
                    ? scrolled ? "text-primary" : "text-primary-foreground"
                    : scrolled ? "text-foreground/70 hover:text-primary" : "text-primary-foreground/80 hover:text-primary-foreground"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={cn(
                      "absolute -bottom-1 left-0 right-0 h-0.5",
                      scrolled ? "bg-primary" : "bg-primary-foreground"
                    )}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className={cn(
                "px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300",
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/30"
              )}
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-foreground" : "text-primary-foreground"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        "block py-3 px-4 rounded-lg font-medium transition-colors",
                        location.pathname === link.path
                          ? "bg-primary/10 text-primary"
                          : scrolled
                            ? "text-foreground/70 hover:bg-muted"
                            : "text-primary-foreground/80 hover:bg-primary-foreground/10"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-4"
                >
                  <Link
                    to="/contact"
                    className="block w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-medium text-center"
                  >
                    Join Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
